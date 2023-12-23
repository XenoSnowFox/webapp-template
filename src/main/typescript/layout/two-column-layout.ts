export default class TwoColumnLayout extends HTMLElement {
	public static createInstance(callback?: (withLayout: HTMLElement) => void): HTMLElement {
		const el = document.createElement("crpg-layout-two-column");
		if (callback) callback(el);
		return el;
	}

	public constructor() {
		super();
	}

	connectedCallback() {
		super.setAttribute("is", "div");
	}
}

customElements.define("crpg-layout-two-column", TwoColumnLayout);
