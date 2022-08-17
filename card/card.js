export default class Card {
    constructor (product) {
        this.state = product;
        this.render();
    }

    getTemplate () {
        return `
        <div class="product-card">
                    <img src="${this.state.images[0]}" alt="product" class="product-image">
                    <div class="product-content">
                        <div class="rating-price">
                            <div class="product-rating">
                                <span>${this.state.rating}</span>
                                <i class="bi bi-star"></i>
                            </div>
                            <div class="product-price">${this.state.price}</div>
                        </div>
                        <h5 class="product-title">${this.state.title}</h5>
                        <p class="product-description">${this.state.category}</p>
                        </div>
                    <footer class="product-footer">
                     <div class="product-btn">ADD TO CART</div>
                    </footer>
                </div>
        `
    };

    render() {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();

        this.element = wrapper.firstElementChild;

    };
}