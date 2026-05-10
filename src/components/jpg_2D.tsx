/**
 * 将 JPG 图片转换为包含颜色信息的数据结构
 * @param Path - JPG 图片的相对路径
 * @returns Promise，包含颜色二维数组、宽度、高度等信息
 */
async function JPG_to_2D(Path: string): Promise<{
    colors: number[][][]; // 三维数组 [行][列][RGBA]
    width: number;        // 图片宽度
    height: number;       // 图片高度
    pixelCount: number;   // 总像素数
} | null> {
    return new Promise((resolve, reject) => {
        // 创建 Image 对象
        const img = new Image();
        
        // 处理跨域问题
        img.crossOrigin = 'anonymous';
        
        // 图片加载成功
        img.onload = () => {
            try {
                // 创建 Canvas 元素
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                if (!ctx) {
                    reject(new Error('无法获取 Canvas 上下文'));
                    return;
                }
                
                // 设置 Canvas 尺寸
                canvas.width = img.width;
                canvas.height = img.height;
                
                // 绘制图片到 Canvas
                ctx.drawImage(img, 0, 0);
                
                // 获取像素数据
                const imageData = ctx.getImageData(0, 0, img.width, img.height);
                const data = imageData.data;
                
                // 创建二维数组存储颜色信息
                const colors: number[][][] = [];
                
                for (let y = 0; y < img.height; y++) {
                    colors[y] = [];
                    for (let x = 0; x < img.width; x++) {
                        // 计算像素在一维数组中的索引
                        const index = (y * img.width + x) * 4;
                        
                        // 获取 RGBA 值
                        const r = data[index];     // 红色 (0-255)
                        const g = data[index + 1]; // 绿色 (0-255)
                        const b = data[index + 2]; // 蓝色 (0-255)
                        const a = data[index + 3]; // 透明度 (0-255)
                        
                        colors[y][x] = [r, g, b, a];
                    }
                }
                
                // 返回结果
                resolve({
                    colors,
                    width: img.width,
                    height: img.height,
                    pixelCount: img.width * img.height
                });
            } catch (error) {
                reject(error);
            }
        };
        
        // 图片加载失败
        img.onerror = (error) => {
            reject(new Error(`图片加载失败: ${Path}`));
        };
        // 设置图片路径
        img.src = Path;
    });
}
export { JPG_to_2D };