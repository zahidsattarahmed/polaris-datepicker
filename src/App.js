import "./styles.css";
import { useState, useCallback } from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, DatePicker } from "@shopify/polaris";

export default function App() {
  const [{ month, year }, setDate] = useState({ month: 1, year: 2018 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)")
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  return (
    <AppProvider i18n={enTranslations}>
      <DatePicker
        month={month}
        year={year}
        onChange={setSelectedDates}
        onMonthChange={handleMonthChange}
        selected={selectedDates}
      />
    </AppProvider>
  );
}
