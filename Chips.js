function chips()
{
  this.x=0;//Chips X
  this.y=0;//Chips Y
  this.r=0;//Chip Red
  this.g=0;//Chip Green
  this.b=0;//Chip Blue

  this.show=function()
  {
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,width/8,width/10);
  }
}
