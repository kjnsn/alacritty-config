import { ChangeEvent, useId } from 'react';
import theme from './colors';

export function Number({ label, defaultValue, value, setValue }
  : { label: string, defaultValue: number, value?: number, setValue: (arg0: number) => void }) {
  const numberId = useId();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(e.target.value));
  }

  return (
    <form className='max-w-sm mx-auto'>
      <label id={numberId}>{label}</label>
      <input
        aria-describedby={numberId} type='number'
        value={value ?? defaultValue} placeholder={defaultValue.toString()}
        onChange={handleChange} />
    </form>
  )
}

export function Toggle({ label, enabled, setEnabled }: { label: string, enabled: boolean, setEnabled: (arg0: boolean) => void }) {
  const checkColors = 'peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 ';

  return (
    <label className="inline-flex items-center cursor-pointer mx-3">
      <span className={"px-2 text-lg font-medium" + theme.text_on_surface}>{label}</span>
      <input type="checkbox" value="" className="sr-only peer" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
      <div className={checkColors + "mx-3 relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4peer-focus "
        + " dark:peer-focus:ring-violet-800 rounded-full peer "
        + " dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full "
        + " peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border "
        + " after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600"}></div>
    </label>
  )
}
