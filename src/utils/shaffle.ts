export function shaffleArray<Type>(originalArr: Type[]): Type[] {
  const list = [...originalArr];
  const random = () => Math.floor(Math.random() * list.length);
  for (let i = 0; i < list.length; i++) {
    const j = random();
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
}
