export class OnlyUse {
    haveused = true ;
    use(func?:Function): Boolean{
        if (this.haveused) {
            this.haveused = false;
            if (func) {
                func();
            }
            return true;
        }else {
            return false;
        }
    }
    reUse(): void {
        this.haveused = true;
    }
}
