var b;
var c;
var cas;
var filled= Create2DArray(7,6);
var scl = innerWidth/8;
var clicked=0;
var player=1;
function initfilled()
{
    for(var i=0;i<7;i++)
    {
      for(j=0;j<6;j++)
      {
        filled[i][j]=0;
      }

    }
  }//init Close
function setup()
{
    c=new Array(42);
    createCanvas(window.innerWidth,window.innerHeight);
    b=new  board();
    for(i=0;i<42;i++)
    {
    c[i]=new chips();
      if(i%2==0)
      c[i].r=255;
      else {
        c[i].r=255;
        c[i].g=255;
        c[i].p1=false;
      }
    }
    initfilled();
}
function checked()
{
  //Check wether if any player won
  rowcounter=1;
  for(i=6;i>0;i--)
  {
    colcounter=1;
    for(j=5;j>0;j--)
    {
      //Check for Row
      if((filled[i][j]==filled[i][j-1])&& filled[i][j]!=0)
      colcounter++;
      if((filled[i][j]==filled[i-1][j])&&filled[i][j]!=0)
      rowcounter++;
      if(rowcounter==4)
      {
        console.log("Row Win");
        noLoop();
      }
      if(colcounter==4)
      {
        console.log("Column Win");
        noLoop();
      }
      rowcounter=1;
      }
  }
}
function draw()
{
  background(51);
  checked();
  for(i=0;i<clicked;i++)
  c[i].show();
  b.show();
}
function Create2DArray(row,col)
{
  var x=new Array(row);
  for(i=0;i<row;i++)
  x[i]=new Array(col);
  return x;
}
function getrow(X)
{
  cas=0;
  x=width/7;
  for(i=0;i<=7;i++)
  {
    current=i*x;
    next=(i+1)*x;
    if(current>X && X<next)
    {
      cas=i-1;
      break;
    }
  }
  return cas;
}
function floorofrow(row)
{
  cas=0;
  if(filled[row][0]!=1 || filled[row][0]!=2)
  {
    for(i=0;i<7;i++)
    {
    if(filled[row][i]==1 || filled[row][i]==2)
    {
      cas=i-1;
      filled[row][cas]=player;
      break;
    }
  }
  }
if(filled[row][5]==0)
{
  filled[row][5]=player;
  cas=5;
}
asa=height-height/10;
for(i=5;i>cas;i--)
asa-=(height/7)+10;
if(player==1)
player=2;
else {
  player=1;
}
  return asa;
}
function mouseClicked()
{
  row=getrow(mouseX)
  if(filled[row][0]==0)
  {
  c[clicked].x=((cas)*width/7+((cas+1)*width/7))/2;
  c[clicked++].y=floorofrow(row);
  }

}