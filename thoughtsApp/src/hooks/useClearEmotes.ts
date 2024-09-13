const useClearEmotes = (emoteRef : React.RefObject<HTMLDivElement>) => {
    emoteRef.current?.classList.remove('active');
}

export default useClearEmotes;