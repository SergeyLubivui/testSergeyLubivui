const timeSlots = document.querySelectorAll('.time-slot');
let selectedSlot = null;

timeSlots.forEach(slot => {
  slot.addEventListener('mousedown', handleMouseDown);
  slot.addEventListener('mousemove', handleMouseMove);
  slot.addEventListener('mouseup', handleMouseUp);
});

function handleMouseDown(e) {
  if (e.button === 0) { // Левая кнопка мыши
    selectedSlot = e.target;
    selectedSlot.classList.add('selected');
  }
}

function handleMouseMove(e) {
  if (selectedSlot) {
    const slotRect = selectedSlot.getBoundingClientRect();
    const offsetX = e.clientX - slotRect.left;
    const offsetY = e.clientY - slotRect.top;

    selectedSlot.style.left = `${e.clientX - offsetX}px`;
    selectedSlot.style.top = `${e.clientY - offsetY}px`;
  }
}

function handleMouseUp(e) {
  if (selectedSlot) {
    selectedSlot.classList.remove('selected');
    selectedSlot.style.left = '';
    selectedSlot.style.top = '';
    selectedSlot = null;
  }
}