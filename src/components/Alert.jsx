import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>{alert.text}</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
