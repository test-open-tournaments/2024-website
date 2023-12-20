export default function ClickArrowIcon({ classList }: { classList?: string }) {
  return (
    <svg
      className={classList}
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
    >
      <path
        fill='#fffefa'
        d='M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z'
      ></path>
    </svg>
  )
}
