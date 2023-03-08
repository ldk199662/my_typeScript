import { useEffect, useMemo, useState } from 'react';

const useAudio = (url: any) => {
	const sound = useMemo(() => new Audio(url), [url]);
	const [song, setSong] = useState(false);

	useEffect(() => {
		song ? sound.play() : sound.pause();
	}, [song, sound]);

	useEffect(() => {
		sound.addEventListener('ended', () => setSong(false));
		return () => {
			sound.removeEventListener('ended', () => setSong(false));
		};
	}, [sound]);

	return [song, setSong];
};

export default useAudio;
