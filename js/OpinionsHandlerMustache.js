import Mustache from "./mustache.js";

export default class OpinionsHandlerMustache {
  constructor() {
    this.opinions = [];
  }

  addOpinion(name, email, imageUrl, rating, news, opinionText, keywords) {
    const newOpinion = {
      name,
      email,
      imageUrl,
      rating,
      news,
      opinionText,
      keywords
    };
    this.opinions.push(newOpinion);
    this.renderOpinions();
  }

  renderOpinions() {
    const opinionsSection = document.getElementById("opinions-list");
    opinionsSection.innerHTML = "";

    const template = `
      {{#opinions}}
        <div class="opinion">
          <h3>{{name}}</h3>
          <p><strong>E-mail:</strong> {{email}}</p>
          <p><strong>Rating:</strong> {{rating}} *</p>
          <p><strong>Opinion:</strong> {{opinionText}}</p>
          <p><strong>Keywords:</strong> {{keywords}}</p>
          {{#imageUrl}}<img src="{{imageUrl}}" alt="User image" />{{/imageUrl}}
        </div>
      {{/opinions}}
    `;

    const rendered = Mustache.render(template, { opinions: this.opinions });
    opinionsSection.innerHTML = rendered;
  }
}