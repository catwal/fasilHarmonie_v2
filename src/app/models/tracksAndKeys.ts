export class TrackAndKey {
    public id: any;
    public name: any;
    public artists: any;
    public album: any;
    public picture: any;
    public key: any;
    public mode: any;
}

export interface SearchResponse {
    items: TrackAndKey;
}
