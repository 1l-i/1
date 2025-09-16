// messageNotifications.js
export function showNotification(message) {
  // Remove any existing notification
  const existing = document.querySelector('.notification-toast');
  if (existing) existing.remove();

  // Create notification element
  const toast = document.createElement('div');
  toast.className = 'notification-toast';
  toast.textContent = message;

  // Optional: Add close button
  const closeBtn = document.createElement('span');
  closeBtn.textContent = '×';
  closeBtn.className = 'notification-close';
  closeBtn.onclick = () => toast.remove();
  toast.appendChild(closeBtn);

  // Append to body
  document.body.appendChild(toast);

  // Remove after 3 seconds unless closed manually
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3000);
}