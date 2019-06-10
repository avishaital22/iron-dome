import React from 'react';

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const context = canvas.getContext("2d") //link the canvas

    context.fillStyle = 'blue';
    context.fillRect(0,0,canvas.clientWidth ,canvas.clientHeight); //draw the rectangle
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={1500} height={500} />
      </div>
    )
  }
}

export default Canvas
