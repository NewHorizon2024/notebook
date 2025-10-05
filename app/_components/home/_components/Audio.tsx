type AudioProps = Readonly<{
  fileSrc?: string;
}>;
export default function AudioPlayer({ fileSrc }: AudioProps) {
  return (
    <figure>
      <figcaption hidden>Listen to the T-Rex:</figcaption>
      <audio  autoPlay controls src={fileSrc}></audio>
    </figure>
  );
}
