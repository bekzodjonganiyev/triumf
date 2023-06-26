export const time = (arg) => {
    const date = new Date(arg);
    const kun = String(date.getDate()).padStart(2, 0);
    const oy = String(date.getMonth() + 1).padStart(2, 0);
    const soat = String(date.getHours()).padStart(2, 0);
    const minut = String(date.getMinutes()).padStart(2, 0);
    const yil = date.getFullYear();
    return { hour: `${soat}:${minut}`, date: `${kun}.${oy}.${yil}`};
  };