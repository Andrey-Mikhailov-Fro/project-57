type PanelProps = {
    variant: string;
    icons: string[];
}

function Panel({ variant, icons }: PanelProps) {
    return (
        <div>
          {variant === 'additional' ? (<hr className="separator" />) : null}
          {icons.map((icon, index) => (
            <button key={index} className="sidebar-panel-icon">
              <img src={`/${icon}`} />
            </button>
          ))}
        </div>
    );
}

export default Panel;