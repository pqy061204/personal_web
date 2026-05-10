# -*- coding: utf-8 -*-
"""
自定义迭代拟合算法 - AI产业经济贡献拟合
严格按照你的while循环+步长衰减+变量寻优逻辑实现
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# ===================== 1. 你的淄博实证数据（2016-2024）=====================
data = pd.DataFrame({
    "年份": [2016,2017,2018,2019,2020,2021,2022,2023,2024],
    "GDP(亿元)": [3735,4402,5068,5207,5500,5860,6100,6436,6700],
    "AI企业数": [11,25,53,96,162,240,325,410,485],
    "R&D经费": [85.0,97.5,133.68,122.0,126.0,128.5,129.4,136.8,142.0],
    "5G基站数": [0,0,0,500,2326,3862,5398,9163,10446],
    "高新企业数": [251,380,512,703,707,1027,1374,1684,1752],
    "AI专利数": [12,28,45,68,92,135,186,243,301]
})

# 自变量X（AI指标）+ 因变量Y（GDP）
X = data[["AI企业数", "R&D经费", "5G基站数", "高新企业数", "AI专利数"]].values
Y = data["GDP(亿元)"].values
n_samples, n_features = X.shape

# ===================== 2. 算法核心参数初始化 =====================
params = np.zeros(n_features + 1)  # 参数：[截距, 系数1,系数2...系数5]
a = 1.0  # 初始步长
precision = 1e-6  # 目标精度
best_mse = float('inf')  # 初始最小误差
converged = False

# ===================== 3. 自定义拟合函数（线性模型） =====================
def predict(params, X):
    """线性拟合：y = 截距 + w1*x1 + w2*x2 + ... + w5*x5"""
    return params[0] + np.dot(X, params[1:])

# ===================== 4. 误差计算（MSE） =====================
def calculate_mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

# ===================== 5. 核心算法：你的while迭代寻优逻辑 =====================
print("="*60)
print("开始自定义迭代拟合（按你的规则运行）")
print("="*60)

# 外层循环：步长衰减直到达到精度
while a > precision:
    changed = False  # 标记本轮是否有参数更新
    
    # 遍历每一个参数（截距 + 所有系数）
    for i in range(len(params)):
        # 保存当前参数，用于回滚
        original_param = params[i]
        
        # 尝试 + 步长
        params[i] = original_param + a
        y_pred = predict(params, X)
        mse_plus = calculate_mse(Y, y_pred)
        
        # 尝试 - 步长
        params[i] = original_param - a
        y_pred = predict(params, X)
        mse_minus = calculate_mse(Y, y_pred)
        
        # 恢复原始参数
        params[i] = original_param
        
        # 选择最优方向
        if mse_plus < best_mse:
            params[i] += a
            best_mse = mse_plus
            changed = True
            print(f"步长a={a:.6f} | 参数{i} +{a} | MSE={best_mse:.2f}")
        elif mse_minus < best_mse:
            params[i] -= a
            best_mse = mse_minus
            changed = True
            print(f"步长a={a:.6f} | 参数{i} -{a} | MSE={best_mse:.2f}")
        else:
            # ±都无法优化 → 该变量初次完成，跳过
            print(f"步长a={a:.6f} | 参数{i} 无优化 → 初次完成")
    
    # 一轮所有变量遍历完成 → 步长衰减
    if not changed:
        print(f"✅ 步长a={a:.6f} 无参数更新，衰减步长")
    a = a / 10

# 最终收敛：循环至所有变量稳定
print("\n" + "="*60)
print("步长达到精度，最终稳定收敛...")
final_converge = True
op=0
while final_converge and op < 200000000:
    final_changed = False
    if op % 100000 == 0:
        print(op)
    op+=1
    for i in range(len(params)):
        original_param = params[i]
        params[i] += precision
        mse_plus = calculate_mse(Y, predict(params, X))
        params[i] -= 2*precision
        mse_minus = calculate_mse(Y, predict(params, X))
        params[i] = original_param
        
        if mse_plus < best_mse:
            params[i] += precision
            best_mse = mse_plus
            final_changed = True
        elif mse_minus < best_mse:
            params[i] -= precision
            best_mse = mse_minus
            final_changed = True
    if not final_changed:
        final_converge = False

# ===================== 6. 输出最终结果 =====================
y_final_pred = predict(params, X)
final_mse = calculate_mse(Y, y_final_pred)

print("\n🎉 拟合完成！")
print(f"最终均方误差(MSE): {final_mse:.2f}")
print(f"拟合参数(截距 + 5个AI指标系数):")
print(f"截距: {params[0]:.4f}")
print(f"AI企业数系数: {params[1]:.4f}")
print(f"R&D经费系数: {params[2]:.4f}")
print(f"5G基站数系数: {params[3]:.8f}")
print(f"高新企业数系数: {params[4]:.4f}")
print(f"AI专利数系数: {params[5]:.4f}")

# ===================== 7. 可视化拟合效果 =====================
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.figure(figsize=(10,5))
plt.plot(data['年份'], Y, 'ro-', label='真实GDP')
plt.plot(data['年份'], y_final_pred, 'b*-', label='拟合GDP')
plt.xlabel('年份')
plt.ylabel('GDP(亿元)')
plt.title('淄博AI产业经济贡献拟合结果（自定义算法）')
plt.legend()
plt.grid(True)
plt.show()

# ===================== 8. 保存结果到Excel =====================
result = data.copy()
result['拟合GDP(亿元)'] = y_final_pred
result['误差(亿元)'] = Y - y_final_pred

params_df = pd.DataFrame({
    '参数': ['截距', 'AI企业数系数', 'R&D经费系数', '5G基站数系数', '高新企业数系数', 'AI专利数系数'],
    '数值': params
})

with pd.ExcelWriter("AI产业经济贡献_自定义拟合结果.xlsx") as writer:
    result.to_excel(writer, sheet_name='拟合数据', index=False)
    params_df.to_excel(writer, sheet_name='最优参数', index=False)

print("\n✅ 结果已保存：AI产业经济贡献_自定义拟合结果.xlsx")