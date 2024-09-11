// Access the canvas and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Adjust canvas size to fill the window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Function to wrap text inside a specified width
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let words = text.split(' ');
  let line = '';
  let lines = [];

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    let testWidth = ctx.measureText(testLine).width;

    if (testWidth > maxWidth && i > 0) {
      lines.push(line);
      line = words[i] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  // Draw each line of text
  for (let j = 0; j < lines.length; j++) {
    ctx.fillText(lines[j], x, y + j * lineHeight);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Set up parameters
  const rectWidth = 180;
  const rectHeight = 150;
  const gap = (canvas.width - 3 * rectWidth) / 4;
  
  // Draw rectangles
  ctx.fillStyle = 'black';
  ctx.fillRect(gap, (canvas.height - rectHeight) / 2, rectWidth, rectHeight);
  ctx.fillRect(gap * 2 + rectWidth, (canvas.height - rectHeight) / 2, rectWidth, rectHeight);
  ctx.fillRect(gap * 3 + rectWidth * 2, (canvas.height - rectHeight) / 2, rectWidth, rectHeight);
  
  // Set text properties
  ctx.fillStyle = 'white';
  ctx.font = '15px Arial'; // For headings
  
  // Draw headings and paragraphs
  const headings = ["APRON FEEDERS", "GRIZZLY FEEDERS", "PANFEEDERS"];
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus nec porttitor justo ac dapibus varius.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus nec porttitor justo ac dapibus varius.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra cursus nec porttitor justo ac dapibus varius."
  ];
  
  for (let i = 0; i < 3; i++) {
    let x = gap + (i * (rectWidth + gap)) + rectWidth / 2;
    let y = (canvas.height - rectHeight) / 2;

    // Draw heading
    ctx.font = '15px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(headings[i], x, y + 10);

    // Draw paragraph
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    wrapText(ctx, paragraphs[i], x, y + 30, rectWidth, 15);
  }
}

// Call the draw function to render the canvas
draw();