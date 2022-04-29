interface Props {
  className: string
  height: number
  width: number
}

const Twitter = ({
  className = '',
  height = 42,
  width = 42,
}: Props): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.2128 38.0623C29.0579 38.0623 37.727 24.9315 37.727 13.5481C37.727 13.1789 37.7188 12.8016 37.7024 12.4324C39.3888 11.2129 40.8441 9.70226 42 7.97159C40.4294 8.67037 38.7619 9.12674 37.0543 9.3251C38.8522 8.24741 40.1984 6.55439 40.8434 4.55991C39.152 5.56229 37.3023 6.26939 35.3735 6.65089C34.074 5.27005 32.3557 4.35577 30.4844 4.04941C28.6132 3.74304 26.6931 4.06166 25.021 4.95599C23.349 5.85032 22.0182 7.27055 21.2342 8.99711C20.4503 10.7237 20.257 12.6604 20.6842 14.5078C17.2594 14.336 13.9089 13.4463 10.85 11.8965C7.79105 10.3467 5.09196 8.17133 2.9277 5.51147C1.8277 7.40799 1.4911 9.6522 1.9863 11.788C2.48151 13.9238 3.77136 15.7908 5.59371 17.0098C4.2256 16.9664 2.88746 16.598 1.68984 15.9352V16.0418C1.68862 18.0321 2.37667 19.9613 3.63704 21.5017C4.89741 23.042 6.65232 24.0983 8.60344 24.491C7.3361 24.8378 6.00597 24.8883 4.71598 24.6387C5.26655 26.3503 6.33775 27.8474 7.7801 28.9209C9.22244 29.9944 10.964 30.5909 12.7616 30.627C9.70974 33.0243 5.93981 34.3245 2.05898 34.3184C1.37075 34.3173 0.683198 34.2751 0 34.1921C3.9425 36.7214 8.52868 38.0647 13.2128 38.0623Z" />
    </svg>
  )
}

export { Twitter }