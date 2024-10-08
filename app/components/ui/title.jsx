function title({ text, ...props }) {
  return (
    <h2 className={props.style+" text-xl font-medium text-slate-700 dark:text-green-dark"}>
      [{text? text: "Title"}]
    </h2>
  );
}

export default title;
