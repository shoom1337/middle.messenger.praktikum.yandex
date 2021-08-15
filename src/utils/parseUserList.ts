export default function (list) {
  return list.reduce((acc, item) => {
    acc.push({
      login: item.login,
      avatar: item.avatar,
    });
  }, []);
}
