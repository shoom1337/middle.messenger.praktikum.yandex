export default `
  <div class="input__wrapper">
    <label class="input__label">
      {{ label }}
      <input class="input__input" type="{{ type }}" name="{{ name }}"/>
      <span class="input__error">{{ error }}</span>
    </label>
  </div>
`;
