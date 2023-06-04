// import React from "react";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from '@mui/lab/DatePicker';

// export default function DateTimePickerValue(props) {
//   const { name, label, value, onChange } = props;

//   const convertToDefEventPara = (name, value) => ({
//     target: {
//       name,
//       value
//     }
//   });

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         disableToolbar
//         variant="inline"
//         inputVariant="outlined"
//         label={label}
//         format="MMM/dd/yyyy"
//         name={name}
//         value={value}
//         onChange={(date) => onChange(convertToDefEventPara(name, date))}
//       />
//     </LocalizationProvider>
//   );
// }
