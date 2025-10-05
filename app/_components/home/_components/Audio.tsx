type AudioProps = Readonly<{
  fileSrc?: string;
}>;
export default function AudioPlayer({ fileSrc }: AudioProps) {
  return (
    <figure>
      <figcaption hidden>Listen to the T-Rex:</figcaption>
      <audio hidden autoPlay controls src={fileSrc}></audio>
    </figure>
  );
}
