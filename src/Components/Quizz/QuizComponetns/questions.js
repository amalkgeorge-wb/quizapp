import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function Questions(props) {
  const { buttonValue, value, handleChange, questions } = props;
  return (
    <div>
      <div className="question-num">{`0${buttonValue + 1}/05`}</div>
      <div className="question">{questions[buttonValue].question}</div>
      <RadioGroup>
        {questions[buttonValue].answers.map((item, index) => (
          <div className="options" key={index}>
            <FormControlLabel
              control={
                <Radio
                  checked={value === item?.option}
                  onChange={() => handleChange(item?.option, item?.isCorrect)}
                />
              }
              label={item?.option}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
