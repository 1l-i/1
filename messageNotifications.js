// messageNotifications.js
// Simple in-app message notification system

export function showNotification(message, duration = 3000) {
  // Create notification container if it doesn't exist
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    document.body.appendChild(container);
  }

  // Create the notification element
  const notification = document.createElement('div');
  notification.className = 'notification-popup';
  notification.innerText = message;

  container.appendChild(notification);

  // Remove notification after duration
  setTimeout(() => {
    notification.classList.add('fade-out');
    notification.addEventListener('transitionend', () => {
      notification.remove();
      // Remove container if empty
      if (!container.hasChildNodes()) {
        container.remove();
      }
    });
  }, duration);
}