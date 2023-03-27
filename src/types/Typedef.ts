export type onAddTask = {
    text: string;
    reminder: Boolean;
    date: Date;
  }

export type onAddProps = {
    text: String;
    reminder: Boolean;
    date: Date
  }
  
  
export type headerProps = {
    title: string;
    onAdd: (value: onAddProps) => void;
    showAdd: boolean;
  }