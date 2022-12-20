interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

interface AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}

interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface ParentPlatform {
    platform: Platform;
}

interface Platform3 {
    id: number;
    name: string;
    slug: string;
    image?: any;
    year_end?: any;
    year_start?: any;
    games_count: number;
    image_background: string;
}

interface Requirements {
    minimum: string;
    recommended: string;
}

interface Platform2 {
    platform: Platform3;
    released_at: string;
    requirements: Requirements;
}

interface Store2 {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}

interface Store {
    id: number;
    url: string;
    store: Store2;
}

interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}
interface Publisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
export type GameProps = {
    id: number;
    name: string;
    released: string;
    tba: boolean;
    updated: Date;
    background_image: string;
    background_image_additional: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    added: number;
    added_by_status: AddedByStatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    saturated_color: string
    dominant_color: string;
    parent_platforms: ParentPlatform[];
    platforms: Platform2[];
    stores: Store[];
    developers: Developer[];
    genres: Genre[];
    tags: Tag[];
    publishers: Publisher[];
    esrb_rating?: any;
    clip?: any;
    description_raw: string;
};