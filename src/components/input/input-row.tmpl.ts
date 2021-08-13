export default `
  <div class="input-row__wrapper">
    <label class="input-row__label">
      {{ label }}
      <input class="input__input input-row__input" type="{{ type }}" name="{{ name }}"  value="{{ value }}"/>
      <span class="input__error">{{ error }}</span>
    </label>
  </div>
`;
