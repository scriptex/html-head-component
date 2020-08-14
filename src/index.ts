export class HTMLHeadComponent extends HTMLElement {
	private data: Record<string, string>[] = [];
	private elements: HTMLElement[] = [];

	static get observedAttributes(): string[] {
		return ['data', 'src'];
	}

	constructor() {
		super();
	}

	public async connectedCallback(): Promise<void> {
		const src = this.getAttribute('src');
		const data = this.getAttribute('data');

		this.removeElements();
		this.data = src ? await this.fetchData(src) : this.parseAttribute(data);
		this.createElements();
	}

	public async attributeChangedCallback(name: string, _: string, newValue: string): Promise<void> {
		if (name !== 'data') {
			return;
		}

		this.removeElements();
		this.data = this.parseAttribute(newValue);
		this.createElements();
	}

	private removeElements(): void {
		for (const el of this.elements) {
			document.head.removeChild(el);
		}

		this.elements = [];
	}

	private createElements(): void {
		for (const item of this.data) {
			const { tag, ...attrs } = item;

			if (tag === 'title') {
				document.title = (attrs.content as string) || '';

				continue;
			}

			document.head.appendChild(this.createElement(tag, attrs));
		}
	}

	private createElement(tag: string, attrs: Record<string, string>): HTMLElement {
		const el: HTMLElement = document.createElement(tag);

		Object.keys(attrs).forEach((attr: string) => {
			const attribute = attr.substring(0, 3) === 'og:' ? 'property' : attr;

			if (this.hasContent(attr, tag)) {
				el.innerHTML = attrs[attr];
			} else {
				el.setAttribute(attribute, attrs[attr] || '&nbsp;');
			}
		});

		this.elements.push(el);

		return el;
	}

	private hasContent(attr: string, tag: string): boolean {
		return attr === 'content' && ['style', 'script', 'noscript'].includes(tag);
	}

	private parseAttribute(value: string | null): Record<string, string>[] {
		if (!value) {
			return [];
		}

		try {
			return JSON.parse(value);
		} catch (e) {
			return [];
		}
	}

	private async fetchData(src: string): Promise<Record<string, string>[]> {
		return await fetch(src).then((r: Response) => r.json());
	}
}

window.customElements.define('html-head-component', HTMLHeadComponent);
