function title({ ...props }) {
  return (
    <h2 className={props.style+" text-xl font-medium text-slate-700 dark:text-green-dark"}>
      [{props.txt? props.txt: "Title"}]
    </h2>
  );
}

export default title;
