interface apiDataProps {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  language: string;
  subforem_id: number;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | nullstring;
  crossposted_at: string | nullstring;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: numberstring;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    user_id: numberstring;
    website_url: string | nullstring;
    profile_image: string;
    profile_image_90: string;
  };
  organization: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  };
  flare_tag: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
}
