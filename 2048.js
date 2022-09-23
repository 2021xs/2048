let canvas=document.querySelector('canvas');
let ctx=canvas.getContext('2d');
let rectWidth=80;
let marginWidth=36;
//二维数组用来储存每个方格的数字
let rectNumArray=new Array();
for(let i=0;i<4;i++){
rectNumArray[i]=new Array();
for(let j=0;j<4;j++){
rectNumArray[i][j]=0;
}
}
creatRandomNum();
drawAllRect();
assignment();
alert("2048是一款益智小游戏,其规则为：控制全部方块朝同方向运动,两个同数字方块碰撞后,合并的数字为它们之和,每次操作都会随机生成2,结果得出2048的方块则为游戏胜利。(积分功能还没开发出来,欢迎批评指正)");
//绑定响应函数
document.onkeydown=function(event){
    if(event.key=='ArrowLeft'){
        for(let i=0;i<4;i++){
            let arr=new Array();
            arr[0]=rectNumArray[i][0];
            arr[1]=rectNumArray[i][1];
            arr[2]=rectNumArray[i][2];
            arr[3]=rectNumArray[i][3];
            mergeArr(arr);
            //重新赋值
            rectNumArray[i][0]=arr[0];
            rectNumArray[i][1]=arr[1];
            rectNumArray[i][2]=arr[2];
            rectNumArray[i][3]=arr[3];
        }
        if(checkOver())
        alert('gameover')
        else if(checkSuccess())
        alert('Congratulation!')
        else{
            ctx.clearRect(0,0,canvas.width,canvas.height);
            creatRandomNum();
            drawAllRect();
            assignment();
        }
    }
    else if(event.key=='ArrowUp'){
        for(let i=0;i<4;i++){
            let arr=new Array();
            arr[0]=rectNumArray[0][i];
            arr[1]=rectNumArray[1][i];
            arr[2]=rectNumArray[2][i];
            arr[3]=rectNumArray[3][i];
            mergeArr(arr);
            //重新赋值
            rectNumArray[0][i]=arr[0];
            rectNumArray[1][i]=arr[1];
            rectNumArray[2][i]=arr[2];
            rectNumArray[3][i]=arr[3];
        }
        if(checkOver())
        alert('gameover')
        else if(checkSuccess())
        alert('Congratulation!')
        else{
            ctx.clearRect(0,0,canvas.width,canvas.height);
            creatRandomNum();
            drawAllRect();
            assignment();
        }
    }
    else if(event.key=='ArrowRight'){
        for(let i=0;i<4;i++){
            let arr=new Array();
            arr[0]=rectNumArray[i][3];
            arr[1]=rectNumArray[i][2];
            arr[2]=rectNumArray[i][1];
            arr[3]=rectNumArray[i][0];
            mergeArr(arr);
            //重新赋值
            rectNumArray[i][3]=arr[0];
            rectNumArray[i][2]=arr[1];
            rectNumArray[i][1]=arr[2];
            rectNumArray[i][0]=arr[3];
        }
        if(checkOver())
        alert('gameover')
        else if(checkSuccess())
        alert('Congratulation!')
        else{
            ctx.clearRect(0,0,canvas.width,canvas.height);
            creatRandomNum();
            drawAllRect();
            assignment();
        }
    }
    else if(event.key=='ArrowDown'){
        for(let i=0;i<4;i++){
            let arr=new Array();
            arr[0]=rectNumArray[3][i];
            arr[1]=rectNumArray[2][i];
            arr[2]=rectNumArray[1][i];
            arr[3]=rectNumArray[0][i];
            mergeArr(arr);
            //重新赋值
            rectNumArray[3][i]=arr[0];
            rectNumArray[2][i]=arr[1];
            rectNumArray[1][i]=arr[2];
            rectNumArray[0][i]=arr[3];
        }
        if(checkOver())
        alert('gameover')
        else if(checkSuccess())
        alert('Congratulation!')
        else{
            ctx.clearRect(0,0,canvas.width,canvas.height);
            creatRandomNum();
            drawAllRect();
            assignment();
        }
    }
}
// 这个函数用来在（x，y）位置画单个正方形
function singleRect(x,y,c){
ctx.beginPath();
ctx.fillStyle=c;
ctx.moveTo(x+4,y);
ctx.lineTo(x+rectWidth-4,y);
ctx.arcTo(x+rectWidth,y,x+rectWidth,y+4,4);
ctx.lineTo(x+rectWidth,y+rectWidth-4);
ctx.arcTo(x+rectWidth,y+rectWidth,x+rectWidth-4,y+rectWidth,4);
ctx.lineTo(x+4,y+rectWidth);
ctx.arcTo(x,y+rectWidth,x,y+rectWidth-4,4);
ctx.lineTo(x,y+4);
ctx.arcTo(x,y,x+4,y,4);
ctx.fill();
}
// 这个函数用来画出所有正方形,并根据数值确定其颜色
function drawAllRect(){
    for(let i=0;i<4;i++)
    for(let j=0;j<4;j++){
        let n=rectNumArray[i][j];
        if(n==0)
        c='#F8F8FF'
        else if(n==2)
        c="#33FFFF"
        else if(n==4)
        c="#6633FF"
        else if(n==8)
        c="#FFCC66"
        else if(n==16)
        c="rgba(183,232,189,0.7)"
        else if(n==32)
        c="#ADFF2F"
        else if(n==64)
        c="#20B2AA"
        else if(n=128)
        c="#FFD700"
        else if(n=256)
        c="#FFFF00"
        else if(n=512)
        c="#B8860B"
        else if(n=1024)
        c="#FF8C00"
        else if(n=2048)
        c="#FF4500"
    singleRect((j+1)*marginWidth+j*rectWidth,(i+1)*marginWidth+i*rectWidth,c);
    }
}


//这个函数用来每次操作后随机生成2
function creatRandomNum(){
while(true){
    let a=parseInt(Math.random()*4+1);
    let b=parseInt(Math.random()*4+1);
    //若第a行b列的数为0就赋为2
    if(rectNumArray[a-1][b-1]==0){
    rectNumArray[a-1][b-1]=2;
    break;
    }
}
}
//这个函数用来将数组中的数填到方格中
function assignment(){
    for(let i=0;i<4;i++)
    for(let j=0;j<4;j++){
        let x=(j+1)*marginWidth+j*rectWidth+rectWidth/2;
        let y=(i+1)*marginWidth+i*rectWidth+rectWidth/2;
        ctx.fillStyle='#330000';
        ctx.textAlign='center';
        ctx.font='40px serif';
        ctx.textBaseline='middle';
        ctx.fillText(rectNumArray[i][j],x,y);
    }
}
//这个函数用来判断每次操作后数组是否符合标准
function checkStandard(arr){
    let flag=false;
    if(arr[0]==0&&arr[1]==0&&arr[2]==0&&arr[3]==0||
        arr[0]>0&&arr[1]==0&&arr[2]==0&&arr[3]==0||
        arr[0]>0&&arr[1]>0&&arr[2]==0&&arr[3]==0||
        arr[0]>0&&arr[1]>0&&arr[2]>0&&arr[3]==0||
        arr[0]>0&&arr[1]>0&&arr[2]>0&&arr[3]>0)
        flag=true;
    if(arr[0]==arr[1]&&arr[0]!=0||
        arr[1]==arr[2]&&arr[1]!=0||
        arr[2]==arr[3]&&arr[2]!=0)
        flag=false;
    return flag;        
}
//这个函数用来判断游戏是否失败
function checkOver(){
    let flag=false;
    let a=0;
    for(let i=0;i<4;i++)
    for(let j=0;j<4;j++){
        a=rectNumArray[i][j];
        if(a!=0)
        flag=true;
        else{
        flag=false;
        return flag;
        }
    }
    return flag;
}
//这个函数用来判断游戏是否成功
function checkSuccess(){
    let flag=false;
    for(let i=0;i<4;i++)
    for(let j=0;j<4;j++){
        if(rectNumArray[i][j]==2048){
        flag=true;
        return flag;
        }
    }
    return flag;
}
//这个函数用来合并数组
function mergeArr(arr){
while(true){
    //若有0则将其交换到数组最后
    for(let i=0;i<3;i++){
        if(arr[i]==0){
            //位运算交换hh
            arr[i]=arr[i]^arr[i+1];
            arr[i+1]=arr[i]^arr[i+1];
            arr[i]=arr[i]^arr[i+1];
        }
        if(arr[i]==arr[i+1]&&arr[i]!=0){
            arr[i]+=arr[i+1];
            arr[i+1]=0;
        }
    }
    if(checkStandard(arr))
       return arr;
}
}
