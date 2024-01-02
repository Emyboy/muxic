export interface TrackData {
    id: number;
    title: string;
    title_short: string;
    duration: number;
    preview: string
    type: 'track'
}

export interface ArtistData {
    id: number;
    name: string;
    type: 'artist'
}

export interface TrackAlbumData {
    id: number;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    type: 'album'
}
