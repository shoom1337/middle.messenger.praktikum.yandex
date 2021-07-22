export default `
  <div>
    <ul>
      {{@ links}}
        <li>
          <a href="{{ href }}">
            {{ text }}
          </a>
        </li>
      {{@}}
    </ul>
  </div>
`;
