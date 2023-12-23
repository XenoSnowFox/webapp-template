import TwoColumnLayout from "../layout/two-column-layout";

export default class Panel extends HTMLElement {
	public static createInstance(callback?: (withLayout: HTMLElement) => void): HTMLElement {
		const el = document.createElement("crpg-component-panel");
		if (callback) callback(el);
		return el;
	}

	public static withTwoColumnLayout(callback?: (withLayout: HTMLElement) => void) {
		return Panel.createInstance((panel) =>
			panel.appendChild(
				TwoColumnLayout.createInstance((layout) => {
					if (callback) callback(layout);
				})
			)
		);
	}
	static get observedAttributes() {
		return ["surface"];
	}

	public constructor() {
		super();
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		switch (name.toLowerCase()) {
			case "surface":
				this.setAttribute("data-surface", newValue.toLowerCase());
				break;

			default:
				break;
		}
	}

	connectedCallback() {
		super.setAttribute("is", "div");
	}
}

customElements.define("crpg-component-panel", Panel);
