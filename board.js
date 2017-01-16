function board()
{
  this.x=width/7;
  this.show= function()
  {
    fill(255);
    stroke(10);
    for(this.i=1;this.i<=6;this.i++)
    rect(this.i*this.x,0,5,window.innerHeight);
  }
}
