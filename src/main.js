// Import LitElement and html from Lit
import { LitElement, html, css } from "https://unpkg.com/lit@2.0.0?module";

// Create your Lit component class
class MyLitComponent extends LitElement {
  // Define properties
  static properties = {
    buttonColor: { type: String },
    backgroundImage: { type: String }, // Define 'backgroundImage' as a property
  };

  // Initialize default values
  constructor() {
    super();
    this.buttonColor = "bg-blue-500"; // Default button color if not provided
    this.backgroundImage = ""; // Default background image
  }

  // Disable Shadow DOM
  createRenderRoot() {
    return this; // Disable Shadow DOM
  }

  // Render the HTML template
  render() {
    return html`
      <div
        class="p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
        style="background-image: url('${this
          .backgroundImage}'); background-size: cover; background-position: center;"
      >
        <h2 class="text-2xl font-bold text-white">Hello from Lit!</h2>
        <p class="text-base mt-2 text-white">
          This is a Lit component with Tailwind and custom CSS styles.
        </p>
        <!-- Use the dynamic color here -->
        <button
          class="mt-4 px-4 py-2 text-white rounded hover:bg-opacity-80 transition duration-300 ${this
            .buttonColor}"
        >
          Click Me
        </button>
      </div>
    `;
  }
}

// Define the custom element
customElements.define("my-lit-component", MyLitComponent);
