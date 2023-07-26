import React from "react"

function Input({ type, label, name, erro, reg, ...props }) {
  return (
    <div className="mb-4">
      <label
        className="text-base text-[#333] block pb-2"
        style={{ lineHeight: "1rem" }}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="input"
        {...reg(name)}
        {...props}
      />
      <p className="text-sm text-[#f31] mt-1">{erro}</p>
    </div>
  )
}

export default Input
