/**
 * Displays a message on the page
 * @param {string} type - What type of message gets displayed ("danger", "success" etc)
 * @param {string} message - The message to display
 * @param {string} target - Where the message is displayed
 */

export default function displayMessage(type, message, target) {
	const container = document.querySelector(target);

	container.innerHTML = `
    <div class="alert alert-${type}">
      ${message}
    </div>
  `;
}
