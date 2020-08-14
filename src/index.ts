export class HeadComponent extends HTMLElement {
	private data: Record<string, string | Record<string, string>>;
	private elements: Record<string, any>;

	static get observedAttributes(): string[] {
		return ['data'];
	}

	constructor() {
		super();

		this.data = {};
		this.elements = {};
	}

	public connectedCallback(): void {
		this.data = JSON.parse(this.getAttribute('data') || '{}');

		const data = this.data;

		for (const name in data) {
			if (name === 'title') {
				document.title = (data[name] as string) || '';

				continue;
			}

			const item: any = document.createElement(name);
			const attrs = data[name] as Record<string, string>;

			console.log(item, attrs);

			Object.keys(attrs).forEach((attr: string) => {
				const attribute = attr.substring(0, 3) === 'og:' ? 'property' : attr;

				item.setAttribute(attribute, attrs[attr]);
			});

			document.head.appendChild(item);
		}
	}
}

window.customElements.define('head-component', HeadComponent);
