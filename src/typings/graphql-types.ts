export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type Block__Block = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Block__BlockDependencies>;
  drupal_internal__id?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  plugin?: Maybe<Scalars['String']>;
  settings?: Maybe<Block__BlockSettings>;
  visibility?: Maybe<Block__BlockVisibility>;
};

export type Block__BlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block__BlockEdge>;
  nodes: Array<Block__Block>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Block__BlockGroupConnection>;
};


export type Block__BlockConnectionDistinctArgs = {
  field: Block__BlockFieldsEnum;
};


export type Block__BlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Block__BlockFieldsEnum;
};

export type Block__BlockDependencies = {
  module?: Maybe<Array<Maybe<Scalars['String']>>>;
  theme?: Maybe<Array<Maybe<Scalars['String']>>>;
  config?: Maybe<Array<Maybe<Scalars['String']>>>;
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
  enforced?: Maybe<Block__BlockDependenciesEnforced>;
};

export type Block__BlockDependenciesEnforced = {
  module?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Block__BlockDependenciesEnforcedFilterInput = {
  module?: Maybe<StringQueryOperatorInput>;
};

export type Block__BlockDependenciesFilterInput = {
  module?: Maybe<StringQueryOperatorInput>;
  theme?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  enforced?: Maybe<Block__BlockDependenciesEnforcedFilterInput>;
};

export type Block__BlockEdge = {
  next?: Maybe<Block__Block>;
  node: Block__Block;
  previous?: Maybe<Block__Block>;
};

export type Block__BlockFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'langcode'
  | 'status'
  | 'dependencies___module'
  | 'dependencies___theme'
  | 'dependencies___config'
  | 'dependencies___content'
  | 'dependencies___enforced___module'
  | 'drupal_internal__id'
  | 'theme'
  | 'region'
  | 'weight'
  | 'plugin'
  | 'settings___id'
  | 'settings___label'
  | 'settings___provider'
  | 'settings___label_display'
  | 'settings___level'
  | 'settings___depth'
  | 'settings___expand_all_items'
  | 'settings___use_site_logo'
  | 'settings___use_site_name'
  | 'settings___use_site_slogan'
  | 'settings___status'
  | 'settings___info'
  | 'settings___view_mode'
  | 'settings___primary'
  | 'settings___secondary'
  | 'settings___views_label'
  | 'settings___items_per_page'
  | 'visibility___request_path___id'
  | 'visibility___request_path___pages'
  | 'visibility___request_path___negate';

export type Block__BlockFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  dependencies?: Maybe<Block__BlockDependenciesFilterInput>;
  drupal_internal__id?: Maybe<StringQueryOperatorInput>;
  theme?: Maybe<StringQueryOperatorInput>;
  region?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  plugin?: Maybe<StringQueryOperatorInput>;
  settings?: Maybe<Block__BlockSettingsFilterInput>;
  visibility?: Maybe<Block__BlockVisibilityFilterInput>;
};

export type Block__BlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block__BlockEdge>;
  nodes: Array<Block__Block>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Block__BlockSettings = {
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  label_display?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['Int']>;
  expand_all_items?: Maybe<Scalars['Boolean']>;
  use_site_logo?: Maybe<Scalars['Boolean']>;
  use_site_name?: Maybe<Scalars['Boolean']>;
  use_site_slogan?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  view_mode?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  secondary?: Maybe<Scalars['Boolean']>;
  views_label?: Maybe<Scalars['String']>;
  items_per_page?: Maybe<Scalars['String']>;
};

export type Block__BlockSettingsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  label_display?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
  expand_all_items?: Maybe<BooleanQueryOperatorInput>;
  use_site_logo?: Maybe<BooleanQueryOperatorInput>;
  use_site_name?: Maybe<BooleanQueryOperatorInput>;
  use_site_slogan?: Maybe<BooleanQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  view_mode?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<BooleanQueryOperatorInput>;
  secondary?: Maybe<BooleanQueryOperatorInput>;
  views_label?: Maybe<StringQueryOperatorInput>;
  items_per_page?: Maybe<StringQueryOperatorInput>;
};

export type Block__BlockSortInput = {
  fields?: Maybe<Array<Maybe<Block__BlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Block__BlockVisibility = {
  request_path?: Maybe<Block__BlockVisibilityRequest_Path>;
};

export type Block__BlockVisibilityFilterInput = {
  request_path?: Maybe<Block__BlockVisibilityRequest_PathFilterInput>;
};

export type Block__BlockVisibilityRequest_Path = {
  id?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  negate?: Maybe<Scalars['Boolean']>;
};

export type Block__BlockVisibilityRequest_PathFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<StringQueryOperatorInput>;
  negate?: Maybe<BooleanQueryOperatorInput>;
};

export type Block_Content__Banner_Block = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__id?: Maybe<Scalars['Int']>;
  drupal_internal__revision_id?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_created?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['Date']>;
  reusable?: Maybe<Scalars['Boolean']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  revision_translation_affected?: Maybe<Scalars['Boolean']>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  content_translation_created?: Maybe<Scalars['Date']>;
  field_content_link?: Maybe<Block_Content__Banner_BlockField_Content_Link>;
  field_summary?: Maybe<Scalars['String']>;
  field_title?: Maybe<Scalars['String']>;
  relationships?: Maybe<Block_Content__Banner_BlockRelationships>;
  field_banner_image?: Maybe<Block_Content__Banner_BlockField_Banner_Image>;
};


export type Block_Content__Banner_BlockRevision_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Block_Content__Banner_BlockChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Block_Content__Banner_BlockContent_Translation_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Block_Content__Banner_BlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block_Content__Banner_BlockEdge>;
  nodes: Array<Block_Content__Banner_Block>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Block_Content__Banner_BlockGroupConnection>;
};


export type Block_Content__Banner_BlockConnectionDistinctArgs = {
  field: Block_Content__Banner_BlockFieldsEnum;
};


export type Block_Content__Banner_BlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Block_Content__Banner_BlockFieldsEnum;
};

export type Block_Content__Banner_BlockEdge = {
  next?: Maybe<Block_Content__Banner_Block>;
  node: Block_Content__Banner_Block;
  previous?: Maybe<Block_Content__Banner_Block>;
};

export type Block_Content__Banner_BlockField_Banner_Image = {
  alt?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Block_Content__Banner_BlockField_Banner_ImageFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type Block_Content__Banner_BlockField_Content_Link = {
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Block_Content__Banner_BlockField_Content_LinkFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type Block_Content__Banner_BlockFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__id'
  | 'drupal_internal__revision_id'
  | 'langcode'
  | 'revision_created'
  | 'status'
  | 'info'
  | 'changed'
  | 'reusable'
  | 'default_langcode'
  | 'revision_translation_affected'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'content_translation_created'
  | 'field_content_link___uri'
  | 'field_content_link___title'
  | 'field_summary'
  | 'field_title'
  | 'relationships___content_translation_uid___id'
  | 'relationships___content_translation_uid___parent___id'
  | 'relationships___content_translation_uid___parent___children'
  | 'relationships___content_translation_uid___children'
  | 'relationships___content_translation_uid___children___id'
  | 'relationships___content_translation_uid___children___children'
  | 'relationships___content_translation_uid___internal___content'
  | 'relationships___content_translation_uid___internal___contentDigest'
  | 'relationships___content_translation_uid___internal___description'
  | 'relationships___content_translation_uid___internal___fieldOwners'
  | 'relationships___content_translation_uid___internal___ignoreType'
  | 'relationships___content_translation_uid___internal___mediaType'
  | 'relationships___content_translation_uid___internal___owner'
  | 'relationships___content_translation_uid___internal___type'
  | 'relationships___content_translation_uid___drupal_id'
  | 'relationships___content_translation_uid___name'
  | 'relationships___content_translation_uid___relationships___block_content__banner_block'
  | 'relationships___content_translation_uid___relationships___block_content__disclaimer_block'
  | 'relationships___content_translation_uid___relationships___block_content__footer_promo_block'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__tags'
  | 'relationships___content_translation_uid___relationships___node__article'
  | 'relationships___content_translation_uid___relationships___node__recipe'
  | 'relationships___content_translation_uid___relationships___node__page'
  | 'relationships___field_banner_image___id'
  | 'relationships___field_banner_image___parent___id'
  | 'relationships___field_banner_image___parent___children'
  | 'relationships___field_banner_image___children'
  | 'relationships___field_banner_image___children___id'
  | 'relationships___field_banner_image___children___children'
  | 'relationships___field_banner_image___internal___content'
  | 'relationships___field_banner_image___internal___contentDigest'
  | 'relationships___field_banner_image___internal___description'
  | 'relationships___field_banner_image___internal___fieldOwners'
  | 'relationships___field_banner_image___internal___ignoreType'
  | 'relationships___field_banner_image___internal___mediaType'
  | 'relationships___field_banner_image___internal___owner'
  | 'relationships___field_banner_image___internal___type'
  | 'relationships___field_banner_image___drupal_id'
  | 'relationships___field_banner_image___drupal_internal__fid'
  | 'relationships___field_banner_image___langcode'
  | 'relationships___field_banner_image___filename'
  | 'relationships___field_banner_image___uri___value'
  | 'relationships___field_banner_image___uri___url'
  | 'relationships___field_banner_image___filemime'
  | 'relationships___field_banner_image___filesize'
  | 'relationships___field_banner_image___status'
  | 'relationships___field_banner_image___created'
  | 'relationships___field_banner_image___changed'
  | 'relationships___field_banner_image___relationships___node__recipe'
  | 'relationships___field_banner_image___relationships___node__article'
  | 'relationships___field_banner_image___relationships___block_content__footer_promo_block'
  | 'relationships___field_banner_image___relationships___block_content__banner_block'
  | 'relationships___field_banner_image___localFile___sourceInstanceName'
  | 'relationships___field_banner_image___localFile___absolutePath'
  | 'relationships___field_banner_image___localFile___relativePath'
  | 'relationships___field_banner_image___localFile___extension'
  | 'relationships___field_banner_image___localFile___size'
  | 'relationships___field_banner_image___localFile___prettySize'
  | 'relationships___field_banner_image___localFile___modifiedTime'
  | 'relationships___field_banner_image___localFile___accessTime'
  | 'relationships___field_banner_image___localFile___changeTime'
  | 'relationships___field_banner_image___localFile___birthTime'
  | 'relationships___field_banner_image___localFile___root'
  | 'relationships___field_banner_image___localFile___dir'
  | 'relationships___field_banner_image___localFile___base'
  | 'relationships___field_banner_image___localFile___ext'
  | 'relationships___field_banner_image___localFile___name'
  | 'relationships___field_banner_image___localFile___relativeDirectory'
  | 'relationships___field_banner_image___localFile___dev'
  | 'relationships___field_banner_image___localFile___mode'
  | 'relationships___field_banner_image___localFile___nlink'
  | 'relationships___field_banner_image___localFile___uid'
  | 'relationships___field_banner_image___localFile___gid'
  | 'relationships___field_banner_image___localFile___rdev'
  | 'relationships___field_banner_image___localFile___ino'
  | 'relationships___field_banner_image___localFile___atimeMs'
  | 'relationships___field_banner_image___localFile___mtimeMs'
  | 'relationships___field_banner_image___localFile___ctimeMs'
  | 'relationships___field_banner_image___localFile___atime'
  | 'relationships___field_banner_image___localFile___mtime'
  | 'relationships___field_banner_image___localFile___ctime'
  | 'relationships___field_banner_image___localFile___birthtime'
  | 'relationships___field_banner_image___localFile___birthtimeMs'
  | 'relationships___field_banner_image___localFile___blksize'
  | 'relationships___field_banner_image___localFile___blocks'
  | 'relationships___field_banner_image___localFile___url'
  | 'relationships___field_banner_image___localFile___id'
  | 'relationships___field_banner_image___localFile___children'
  | 'field_banner_image___alt'
  | 'field_banner_image___width'
  | 'field_banner_image___height';

export type Block_Content__Banner_BlockFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  reusable?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  field_content_link?: Maybe<Block_Content__Banner_BlockField_Content_LinkFilterInput>;
  field_summary?: Maybe<StringQueryOperatorInput>;
  field_title?: Maybe<StringQueryOperatorInput>;
  relationships?: Maybe<Block_Content__Banner_BlockRelationshipsFilterInput>;
  field_banner_image?: Maybe<Block_Content__Banner_BlockField_Banner_ImageFilterInput>;
};

export type Block_Content__Banner_BlockFilterListInput = {
  elemMatch?: Maybe<Block_Content__Banner_BlockFilterInput>;
};

export type Block_Content__Banner_BlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block_Content__Banner_BlockEdge>;
  nodes: Array<Block_Content__Banner_Block>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Block_Content__Banner_BlockRelationships = {
  content_translation_uid?: Maybe<User__User>;
  field_banner_image?: Maybe<File__File>;
};

export type Block_Content__Banner_BlockRelationshipsFilterInput = {
  content_translation_uid?: Maybe<User__UserFilterInput>;
  field_banner_image?: Maybe<File__FileFilterInput>;
};

export type Block_Content__Banner_BlockSortInput = {
  fields?: Maybe<Array<Maybe<Block_Content__Banner_BlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Block_Content__Disclaimer_Block = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__id?: Maybe<Scalars['Int']>;
  drupal_internal__revision_id?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_created?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['Date']>;
  reusable?: Maybe<Scalars['Boolean']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  revision_translation_affected?: Maybe<Scalars['Boolean']>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  content_translation_created?: Maybe<Scalars['Date']>;
  field_copyright?: Maybe<Block_Content__Disclaimer_BlockField_Copyright>;
  field_disclaimer?: Maybe<Block_Content__Disclaimer_BlockField_Disclaimer>;
  relationships?: Maybe<Block_Content__Disclaimer_BlockRelationships>;
};


export type Block_Content__Disclaimer_BlockRevision_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Block_Content__Disclaimer_BlockChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Block_Content__Disclaimer_BlockContent_Translation_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Block_Content__Disclaimer_BlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block_Content__Disclaimer_BlockEdge>;
  nodes: Array<Block_Content__Disclaimer_Block>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Block_Content__Disclaimer_BlockGroupConnection>;
};


export type Block_Content__Disclaimer_BlockConnectionDistinctArgs = {
  field: Block_Content__Disclaimer_BlockFieldsEnum;
};


export type Block_Content__Disclaimer_BlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Block_Content__Disclaimer_BlockFieldsEnum;
};

export type Block_Content__Disclaimer_BlockEdge = {
  next?: Maybe<Block_Content__Disclaimer_Block>;
  node: Block_Content__Disclaimer_Block;
  previous?: Maybe<Block_Content__Disclaimer_Block>;
};

export type Block_Content__Disclaimer_BlockField_Copyright = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type Block_Content__Disclaimer_BlockField_CopyrightFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  processed?: Maybe<StringQueryOperatorInput>;
};

export type Block_Content__Disclaimer_BlockField_Disclaimer = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type Block_Content__Disclaimer_BlockField_DisclaimerFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  processed?: Maybe<StringQueryOperatorInput>;
};

export type Block_Content__Disclaimer_BlockFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__id'
  | 'drupal_internal__revision_id'
  | 'langcode'
  | 'revision_created'
  | 'status'
  | 'info'
  | 'changed'
  | 'reusable'
  | 'default_langcode'
  | 'revision_translation_affected'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'content_translation_created'
  | 'field_copyright___value'
  | 'field_copyright___format'
  | 'field_copyright___processed'
  | 'field_disclaimer___value'
  | 'field_disclaimer___format'
  | 'field_disclaimer___processed'
  | 'relationships___content_translation_uid___id'
  | 'relationships___content_translation_uid___parent___id'
  | 'relationships___content_translation_uid___parent___children'
  | 'relationships___content_translation_uid___children'
  | 'relationships___content_translation_uid___children___id'
  | 'relationships___content_translation_uid___children___children'
  | 'relationships___content_translation_uid___internal___content'
  | 'relationships___content_translation_uid___internal___contentDigest'
  | 'relationships___content_translation_uid___internal___description'
  | 'relationships___content_translation_uid___internal___fieldOwners'
  | 'relationships___content_translation_uid___internal___ignoreType'
  | 'relationships___content_translation_uid___internal___mediaType'
  | 'relationships___content_translation_uid___internal___owner'
  | 'relationships___content_translation_uid___internal___type'
  | 'relationships___content_translation_uid___drupal_id'
  | 'relationships___content_translation_uid___name'
  | 'relationships___content_translation_uid___relationships___block_content__banner_block'
  | 'relationships___content_translation_uid___relationships___block_content__disclaimer_block'
  | 'relationships___content_translation_uid___relationships___block_content__footer_promo_block'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__tags'
  | 'relationships___content_translation_uid___relationships___node__article'
  | 'relationships___content_translation_uid___relationships___node__recipe'
  | 'relationships___content_translation_uid___relationships___node__page';

export type Block_Content__Disclaimer_BlockFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  reusable?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  field_copyright?: Maybe<Block_Content__Disclaimer_BlockField_CopyrightFilterInput>;
  field_disclaimer?: Maybe<Block_Content__Disclaimer_BlockField_DisclaimerFilterInput>;
  relationships?: Maybe<Block_Content__Disclaimer_BlockRelationshipsFilterInput>;
};

export type Block_Content__Disclaimer_BlockFilterListInput = {
  elemMatch?: Maybe<Block_Content__Disclaimer_BlockFilterInput>;
};

export type Block_Content__Disclaimer_BlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block_Content__Disclaimer_BlockEdge>;
  nodes: Array<Block_Content__Disclaimer_Block>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Block_Content__Disclaimer_BlockRelationships = {
  content_translation_uid?: Maybe<User__User>;
};

export type Block_Content__Disclaimer_BlockRelationshipsFilterInput = {
  content_translation_uid?: Maybe<User__UserFilterInput>;
};

export type Block_Content__Disclaimer_BlockSortInput = {
  fields?: Maybe<Array<Maybe<Block_Content__Disclaimer_BlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Block_Content__Footer_Promo_Block = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__id?: Maybe<Scalars['Int']>;
  drupal_internal__revision_id?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_created?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['Date']>;
  reusable?: Maybe<Scalars['Boolean']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  revision_translation_affected?: Maybe<Scalars['Boolean']>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  content_translation_created?: Maybe<Scalars['Date']>;
  field_content_link?: Maybe<Block_Content__Footer_Promo_BlockField_Content_Link>;
  field_summary?: Maybe<Scalars['String']>;
  field_title?: Maybe<Scalars['String']>;
  relationships?: Maybe<Block_Content__Footer_Promo_BlockRelationships>;
  field_promo_image?: Maybe<Block_Content__Footer_Promo_BlockField_Promo_Image>;
};


export type Block_Content__Footer_Promo_BlockRevision_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Block_Content__Footer_Promo_BlockChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Block_Content__Footer_Promo_BlockContent_Translation_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Block_Content__Footer_Promo_BlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block_Content__Footer_Promo_BlockEdge>;
  nodes: Array<Block_Content__Footer_Promo_Block>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Block_Content__Footer_Promo_BlockGroupConnection>;
};


export type Block_Content__Footer_Promo_BlockConnectionDistinctArgs = {
  field: Block_Content__Footer_Promo_BlockFieldsEnum;
};


export type Block_Content__Footer_Promo_BlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Block_Content__Footer_Promo_BlockFieldsEnum;
};

export type Block_Content__Footer_Promo_BlockEdge = {
  next?: Maybe<Block_Content__Footer_Promo_Block>;
  node: Block_Content__Footer_Promo_Block;
  previous?: Maybe<Block_Content__Footer_Promo_Block>;
};

export type Block_Content__Footer_Promo_BlockField_Content_Link = {
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Block_Content__Footer_Promo_BlockField_Content_LinkFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type Block_Content__Footer_Promo_BlockField_Promo_Image = {
  alt?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Block_Content__Footer_Promo_BlockField_Promo_ImageFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type Block_Content__Footer_Promo_BlockFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__id'
  | 'drupal_internal__revision_id'
  | 'langcode'
  | 'revision_created'
  | 'status'
  | 'info'
  | 'changed'
  | 'reusable'
  | 'default_langcode'
  | 'revision_translation_affected'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'content_translation_created'
  | 'field_content_link___uri'
  | 'field_content_link___title'
  | 'field_summary'
  | 'field_title'
  | 'relationships___content_translation_uid___id'
  | 'relationships___content_translation_uid___parent___id'
  | 'relationships___content_translation_uid___parent___children'
  | 'relationships___content_translation_uid___children'
  | 'relationships___content_translation_uid___children___id'
  | 'relationships___content_translation_uid___children___children'
  | 'relationships___content_translation_uid___internal___content'
  | 'relationships___content_translation_uid___internal___contentDigest'
  | 'relationships___content_translation_uid___internal___description'
  | 'relationships___content_translation_uid___internal___fieldOwners'
  | 'relationships___content_translation_uid___internal___ignoreType'
  | 'relationships___content_translation_uid___internal___mediaType'
  | 'relationships___content_translation_uid___internal___owner'
  | 'relationships___content_translation_uid___internal___type'
  | 'relationships___content_translation_uid___drupal_id'
  | 'relationships___content_translation_uid___name'
  | 'relationships___content_translation_uid___relationships___block_content__banner_block'
  | 'relationships___content_translation_uid___relationships___block_content__disclaimer_block'
  | 'relationships___content_translation_uid___relationships___block_content__footer_promo_block'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__tags'
  | 'relationships___content_translation_uid___relationships___node__article'
  | 'relationships___content_translation_uid___relationships___node__recipe'
  | 'relationships___content_translation_uid___relationships___node__page'
  | 'relationships___field_promo_image___id'
  | 'relationships___field_promo_image___parent___id'
  | 'relationships___field_promo_image___parent___children'
  | 'relationships___field_promo_image___children'
  | 'relationships___field_promo_image___children___id'
  | 'relationships___field_promo_image___children___children'
  | 'relationships___field_promo_image___internal___content'
  | 'relationships___field_promo_image___internal___contentDigest'
  | 'relationships___field_promo_image___internal___description'
  | 'relationships___field_promo_image___internal___fieldOwners'
  | 'relationships___field_promo_image___internal___ignoreType'
  | 'relationships___field_promo_image___internal___mediaType'
  | 'relationships___field_promo_image___internal___owner'
  | 'relationships___field_promo_image___internal___type'
  | 'relationships___field_promo_image___drupal_id'
  | 'relationships___field_promo_image___drupal_internal__fid'
  | 'relationships___field_promo_image___langcode'
  | 'relationships___field_promo_image___filename'
  | 'relationships___field_promo_image___uri___value'
  | 'relationships___field_promo_image___uri___url'
  | 'relationships___field_promo_image___filemime'
  | 'relationships___field_promo_image___filesize'
  | 'relationships___field_promo_image___status'
  | 'relationships___field_promo_image___created'
  | 'relationships___field_promo_image___changed'
  | 'relationships___field_promo_image___relationships___node__recipe'
  | 'relationships___field_promo_image___relationships___node__article'
  | 'relationships___field_promo_image___relationships___block_content__footer_promo_block'
  | 'relationships___field_promo_image___relationships___block_content__banner_block'
  | 'relationships___field_promo_image___localFile___sourceInstanceName'
  | 'relationships___field_promo_image___localFile___absolutePath'
  | 'relationships___field_promo_image___localFile___relativePath'
  | 'relationships___field_promo_image___localFile___extension'
  | 'relationships___field_promo_image___localFile___size'
  | 'relationships___field_promo_image___localFile___prettySize'
  | 'relationships___field_promo_image___localFile___modifiedTime'
  | 'relationships___field_promo_image___localFile___accessTime'
  | 'relationships___field_promo_image___localFile___changeTime'
  | 'relationships___field_promo_image___localFile___birthTime'
  | 'relationships___field_promo_image___localFile___root'
  | 'relationships___field_promo_image___localFile___dir'
  | 'relationships___field_promo_image___localFile___base'
  | 'relationships___field_promo_image___localFile___ext'
  | 'relationships___field_promo_image___localFile___name'
  | 'relationships___field_promo_image___localFile___relativeDirectory'
  | 'relationships___field_promo_image___localFile___dev'
  | 'relationships___field_promo_image___localFile___mode'
  | 'relationships___field_promo_image___localFile___nlink'
  | 'relationships___field_promo_image___localFile___uid'
  | 'relationships___field_promo_image___localFile___gid'
  | 'relationships___field_promo_image___localFile___rdev'
  | 'relationships___field_promo_image___localFile___ino'
  | 'relationships___field_promo_image___localFile___atimeMs'
  | 'relationships___field_promo_image___localFile___mtimeMs'
  | 'relationships___field_promo_image___localFile___ctimeMs'
  | 'relationships___field_promo_image___localFile___atime'
  | 'relationships___field_promo_image___localFile___mtime'
  | 'relationships___field_promo_image___localFile___ctime'
  | 'relationships___field_promo_image___localFile___birthtime'
  | 'relationships___field_promo_image___localFile___birthtimeMs'
  | 'relationships___field_promo_image___localFile___blksize'
  | 'relationships___field_promo_image___localFile___blocks'
  | 'relationships___field_promo_image___localFile___url'
  | 'relationships___field_promo_image___localFile___id'
  | 'relationships___field_promo_image___localFile___children'
  | 'field_promo_image___alt'
  | 'field_promo_image___width'
  | 'field_promo_image___height';

export type Block_Content__Footer_Promo_BlockFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  reusable?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  field_content_link?: Maybe<Block_Content__Footer_Promo_BlockField_Content_LinkFilterInput>;
  field_summary?: Maybe<StringQueryOperatorInput>;
  field_title?: Maybe<StringQueryOperatorInput>;
  relationships?: Maybe<Block_Content__Footer_Promo_BlockRelationshipsFilterInput>;
  field_promo_image?: Maybe<Block_Content__Footer_Promo_BlockField_Promo_ImageFilterInput>;
};

export type Block_Content__Footer_Promo_BlockFilterListInput = {
  elemMatch?: Maybe<Block_Content__Footer_Promo_BlockFilterInput>;
};

export type Block_Content__Footer_Promo_BlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Block_Content__Footer_Promo_BlockEdge>;
  nodes: Array<Block_Content__Footer_Promo_Block>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Block_Content__Footer_Promo_BlockRelationships = {
  content_translation_uid?: Maybe<User__User>;
  field_promo_image?: Maybe<File__File>;
};

export type Block_Content__Footer_Promo_BlockRelationshipsFilterInput = {
  content_translation_uid?: Maybe<User__UserFilterInput>;
  field_promo_image?: Maybe<File__FileFilterInput>;
};

export type Block_Content__Footer_Promo_BlockSortInput = {
  fields?: Maybe<Array<Maybe<Block_Content__Footer_Promo_BlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type Contact_Form__Contact_Form = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  drupal_internal__id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>;
  reply?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['String']>;
};

export type Contact_Form__Contact_FormConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contact_Form__Contact_FormEdge>;
  nodes: Array<Contact_Form__Contact_Form>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Contact_Form__Contact_FormGroupConnection>;
};


export type Contact_Form__Contact_FormConnectionDistinctArgs = {
  field: Contact_Form__Contact_FormFieldsEnum;
};


export type Contact_Form__Contact_FormConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Contact_Form__Contact_FormFieldsEnum;
};

export type Contact_Form__Contact_FormEdge = {
  next?: Maybe<Contact_Form__Contact_Form>;
  node: Contact_Form__Contact_Form;
  previous?: Maybe<Contact_Form__Contact_Form>;
};

export type Contact_Form__Contact_FormFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'langcode'
  | 'status'
  | 'drupal_internal__id'
  | 'label'
  | 'recipients'
  | 'reply'
  | 'weight'
  | 'message'
  | 'redirect';

export type Contact_Form__Contact_FormFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  drupal_internal__id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  recipients?: Maybe<StringQueryOperatorInput>;
  reply?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<StringQueryOperatorInput>;
};

export type Contact_Form__Contact_FormGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Contact_Form__Contact_FormEdge>;
  nodes: Array<Contact_Form__Contact_Form>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Contact_Form__Contact_FormSortInput = {
  fields?: Maybe<Array<Maybe<Contact_Form__Contact_FormFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type Date_Format__Date_Format = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type Date_Format__Date_FormatConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Date_Format__Date_FormatEdge>;
  nodes: Array<Date_Format__Date_Format>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Date_Format__Date_FormatGroupConnection>;
};


export type Date_Format__Date_FormatConnectionDistinctArgs = {
  field: Date_Format__Date_FormatFieldsEnum;
};


export type Date_Format__Date_FormatConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Date_Format__Date_FormatFieldsEnum;
};

export type Date_Format__Date_FormatEdge = {
  next?: Maybe<Date_Format__Date_Format>;
  node: Date_Format__Date_Format;
  previous?: Maybe<Date_Format__Date_Format>;
};

export type Date_Format__Date_FormatFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'label';

export type Date_Format__Date_FormatFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type Date_Format__Date_FormatGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Date_Format__Date_FormatEdge>;
  nodes: Array<Date_Format__Date_Format>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Date_Format__Date_FormatSortInput = {
  fields?: Maybe<Array<Maybe<Date_Format__Date_FormatFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type File__File = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__fid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  uri?: Maybe<File__FileUri>;
  filemime?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  relationships?: Maybe<File__FileRelationships>;
  localFile?: Maybe<File>;
};


export type File__FileCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type File__FileChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type File__FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<File__FileEdge>;
  nodes: Array<File__File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<File__FileGroupConnection>;
};


export type File__FileConnectionDistinctArgs = {
  field: File__FileFieldsEnum;
};


export type File__FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: File__FileFieldsEnum;
};

export type File__FileEdge = {
  next?: Maybe<File__File>;
  node: File__File;
  previous?: Maybe<File__File>;
};

export type File__FileFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__fid'
  | 'langcode'
  | 'filename'
  | 'uri___value'
  | 'uri___url'
  | 'filemime'
  | 'filesize'
  | 'status'
  | 'created'
  | 'changed'
  | 'relationships___node__recipe'
  | 'relationships___node__recipe___id'
  | 'relationships___node__recipe___parent___id'
  | 'relationships___node__recipe___parent___children'
  | 'relationships___node__recipe___children'
  | 'relationships___node__recipe___children___id'
  | 'relationships___node__recipe___children___children'
  | 'relationships___node__recipe___internal___content'
  | 'relationships___node__recipe___internal___contentDigest'
  | 'relationships___node__recipe___internal___description'
  | 'relationships___node__recipe___internal___fieldOwners'
  | 'relationships___node__recipe___internal___ignoreType'
  | 'relationships___node__recipe___internal___mediaType'
  | 'relationships___node__recipe___internal___owner'
  | 'relationships___node__recipe___internal___type'
  | 'relationships___node__recipe___drupal_id'
  | 'relationships___node__recipe___drupal_internal__nid'
  | 'relationships___node__recipe___drupal_internal__vid'
  | 'relationships___node__recipe___langcode'
  | 'relationships___node__recipe___revision_timestamp'
  | 'relationships___node__recipe___status'
  | 'relationships___node__recipe___title'
  | 'relationships___node__recipe___created'
  | 'relationships___node__recipe___changed'
  | 'relationships___node__recipe___promote'
  | 'relationships___node__recipe___sticky'
  | 'relationships___node__recipe___default_langcode'
  | 'relationships___node__recipe___moderation_state'
  | 'relationships___node__recipe___path___alias'
  | 'relationships___node__recipe___path___pid'
  | 'relationships___node__recipe___path___langcode'
  | 'relationships___node__recipe___content_translation_source'
  | 'relationships___node__recipe___content_translation_outdated'
  | 'relationships___node__recipe___field_cooking_time'
  | 'relationships___node__recipe___field_difficulty'
  | 'relationships___node__recipe___field_ingredients'
  | 'relationships___node__recipe___field_number_of_servings'
  | 'relationships___node__recipe___field_preparation_time'
  | 'relationships___node__recipe___field_recipe_instruction___value'
  | 'relationships___node__recipe___field_recipe_instruction___format'
  | 'relationships___node__recipe___field_recipe_instruction___processed'
  | 'relationships___node__recipe___field_summary___value'
  | 'relationships___node__recipe___field_summary___format'
  | 'relationships___node__recipe___field_summary___processed'
  | 'relationships___node__recipe___relationships___field_recipe_category'
  | 'relationships___node__recipe___relationships___field_tags'
  | 'relationships___node__recipe___field_image___alt'
  | 'relationships___node__recipe___field_image___width'
  | 'relationships___node__recipe___field_image___height'
  | 'relationships___node__recipe___fields___slug'
  | 'relationships___node__article'
  | 'relationships___node__article___id'
  | 'relationships___node__article___parent___id'
  | 'relationships___node__article___parent___children'
  | 'relationships___node__article___children'
  | 'relationships___node__article___children___id'
  | 'relationships___node__article___children___children'
  | 'relationships___node__article___internal___content'
  | 'relationships___node__article___internal___contentDigest'
  | 'relationships___node__article___internal___description'
  | 'relationships___node__article___internal___fieldOwners'
  | 'relationships___node__article___internal___ignoreType'
  | 'relationships___node__article___internal___mediaType'
  | 'relationships___node__article___internal___owner'
  | 'relationships___node__article___internal___type'
  | 'relationships___node__article___drupal_id'
  | 'relationships___node__article___drupal_internal__nid'
  | 'relationships___node__article___drupal_internal__vid'
  | 'relationships___node__article___langcode'
  | 'relationships___node__article___revision_timestamp'
  | 'relationships___node__article___status'
  | 'relationships___node__article___title'
  | 'relationships___node__article___created'
  | 'relationships___node__article___changed'
  | 'relationships___node__article___promote'
  | 'relationships___node__article___sticky'
  | 'relationships___node__article___default_langcode'
  | 'relationships___node__article___moderation_state'
  | 'relationships___node__article___path___alias'
  | 'relationships___node__article___path___pid'
  | 'relationships___node__article___path___langcode'
  | 'relationships___node__article___content_translation_source'
  | 'relationships___node__article___content_translation_outdated'
  | 'relationships___node__article___body___value'
  | 'relationships___node__article___body___format'
  | 'relationships___node__article___body___processed'
  | 'relationships___node__article___relationships___field_tags'
  | 'relationships___node__article___field_image___alt'
  | 'relationships___node__article___field_image___width'
  | 'relationships___node__article___field_image___height'
  | 'relationships___block_content__footer_promo_block'
  | 'relationships___block_content__footer_promo_block___id'
  | 'relationships___block_content__footer_promo_block___parent___id'
  | 'relationships___block_content__footer_promo_block___parent___children'
  | 'relationships___block_content__footer_promo_block___children'
  | 'relationships___block_content__footer_promo_block___children___id'
  | 'relationships___block_content__footer_promo_block___children___children'
  | 'relationships___block_content__footer_promo_block___internal___content'
  | 'relationships___block_content__footer_promo_block___internal___contentDigest'
  | 'relationships___block_content__footer_promo_block___internal___description'
  | 'relationships___block_content__footer_promo_block___internal___fieldOwners'
  | 'relationships___block_content__footer_promo_block___internal___ignoreType'
  | 'relationships___block_content__footer_promo_block___internal___mediaType'
  | 'relationships___block_content__footer_promo_block___internal___owner'
  | 'relationships___block_content__footer_promo_block___internal___type'
  | 'relationships___block_content__footer_promo_block___drupal_id'
  | 'relationships___block_content__footer_promo_block___drupal_internal__id'
  | 'relationships___block_content__footer_promo_block___drupal_internal__revision_id'
  | 'relationships___block_content__footer_promo_block___langcode'
  | 'relationships___block_content__footer_promo_block___revision_created'
  | 'relationships___block_content__footer_promo_block___status'
  | 'relationships___block_content__footer_promo_block___info'
  | 'relationships___block_content__footer_promo_block___changed'
  | 'relationships___block_content__footer_promo_block___reusable'
  | 'relationships___block_content__footer_promo_block___default_langcode'
  | 'relationships___block_content__footer_promo_block___revision_translation_affected'
  | 'relationships___block_content__footer_promo_block___content_translation_source'
  | 'relationships___block_content__footer_promo_block___content_translation_outdated'
  | 'relationships___block_content__footer_promo_block___content_translation_created'
  | 'relationships___block_content__footer_promo_block___field_content_link___uri'
  | 'relationships___block_content__footer_promo_block___field_content_link___title'
  | 'relationships___block_content__footer_promo_block___field_summary'
  | 'relationships___block_content__footer_promo_block___field_title'
  | 'relationships___block_content__footer_promo_block___field_promo_image___alt'
  | 'relationships___block_content__footer_promo_block___field_promo_image___width'
  | 'relationships___block_content__footer_promo_block___field_promo_image___height'
  | 'relationships___block_content__banner_block'
  | 'relationships___block_content__banner_block___id'
  | 'relationships___block_content__banner_block___parent___id'
  | 'relationships___block_content__banner_block___parent___children'
  | 'relationships___block_content__banner_block___children'
  | 'relationships___block_content__banner_block___children___id'
  | 'relationships___block_content__banner_block___children___children'
  | 'relationships___block_content__banner_block___internal___content'
  | 'relationships___block_content__banner_block___internal___contentDigest'
  | 'relationships___block_content__banner_block___internal___description'
  | 'relationships___block_content__banner_block___internal___fieldOwners'
  | 'relationships___block_content__banner_block___internal___ignoreType'
  | 'relationships___block_content__banner_block___internal___mediaType'
  | 'relationships___block_content__banner_block___internal___owner'
  | 'relationships___block_content__banner_block___internal___type'
  | 'relationships___block_content__banner_block___drupal_id'
  | 'relationships___block_content__banner_block___drupal_internal__id'
  | 'relationships___block_content__banner_block___drupal_internal__revision_id'
  | 'relationships___block_content__banner_block___langcode'
  | 'relationships___block_content__banner_block___revision_created'
  | 'relationships___block_content__banner_block___status'
  | 'relationships___block_content__banner_block___info'
  | 'relationships___block_content__banner_block___changed'
  | 'relationships___block_content__banner_block___reusable'
  | 'relationships___block_content__banner_block___default_langcode'
  | 'relationships___block_content__banner_block___revision_translation_affected'
  | 'relationships___block_content__banner_block___content_translation_source'
  | 'relationships___block_content__banner_block___content_translation_outdated'
  | 'relationships___block_content__banner_block___content_translation_created'
  | 'relationships___block_content__banner_block___field_content_link___uri'
  | 'relationships___block_content__banner_block___field_content_link___title'
  | 'relationships___block_content__banner_block___field_summary'
  | 'relationships___block_content__banner_block___field_title'
  | 'relationships___block_content__banner_block___field_banner_image___alt'
  | 'relationships___block_content__banner_block___field_banner_image___width'
  | 'relationships___block_content__banner_block___field_banner_image___height'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type';

export type File__FileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__fid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<File__FileUriFilterInput>;
  filemime?: Maybe<StringQueryOperatorInput>;
  filesize?: Maybe<IntQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  relationships?: Maybe<File__FileRelationshipsFilterInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type File__FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<File__FileEdge>;
  nodes: Array<File__File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type File__FileRelationships = {
  node__recipe?: Maybe<Array<Maybe<Node__Recipe>>>;
  node__article?: Maybe<Array<Maybe<Node__Article>>>;
  block_content__footer_promo_block?: Maybe<Array<Maybe<Block_Content__Footer_Promo_Block>>>;
  block_content__banner_block?: Maybe<Array<Maybe<Block_Content__Banner_Block>>>;
};

export type File__FileRelationshipsFilterInput = {
  node__recipe?: Maybe<Node__RecipeFilterListInput>;
  node__article?: Maybe<Node__ArticleFilterListInput>;
  block_content__footer_promo_block?: Maybe<Block_Content__Footer_Promo_BlockFilterListInput>;
  block_content__banner_block?: Maybe<Block_Content__Banner_BlockFilterListInput>;
};

export type File__FileSortInput = {
  fields?: Maybe<Array<Maybe<File__FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File__FileUri = {
  value?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type File__FileUriFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type Media_Type__Media_Type = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type Media_Type__Media_TypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Media_Type__Media_TypeEdge>;
  nodes: Array<Media_Type__Media_Type>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Media_Type__Media_TypeGroupConnection>;
};


export type Media_Type__Media_TypeConnectionDistinctArgs = {
  field: Media_Type__Media_TypeFieldsEnum;
};


export type Media_Type__Media_TypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Media_Type__Media_TypeFieldsEnum;
};

export type Media_Type__Media_TypeEdge = {
  next?: Maybe<Media_Type__Media_Type>;
  node: Media_Type__Media_Type;
  previous?: Maybe<Media_Type__Media_Type>;
};

export type Media_Type__Media_TypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'label';

export type Media_Type__Media_TypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type Media_Type__Media_TypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Media_Type__Media_TypeEdge>;
  nodes: Array<Media_Type__Media_Type>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Media_Type__Media_TypeSortInput = {
  fields?: Maybe<Array<Maybe<Media_Type__Media_TypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Menu__Menu = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type Menu__MenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Menu__MenuEdge>;
  nodes: Array<Menu__Menu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Menu__MenuGroupConnection>;
};


export type Menu__MenuConnectionDistinctArgs = {
  field: Menu__MenuFieldsEnum;
};


export type Menu__MenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Menu__MenuFieldsEnum;
};

export type Menu__MenuEdge = {
  next?: Maybe<Menu__Menu>;
  node: Menu__Menu;
  previous?: Maybe<Menu__Menu>;
};

export type Menu__MenuFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'label';

export type Menu__MenuFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type Menu__MenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Menu__MenuEdge>;
  nodes: Array<Menu__Menu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Menu__MenuSortInput = {
  fields?: Maybe<Array<Maybe<Menu__MenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Node__Article = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['Int']>;
  drupal_internal__vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_timestamp?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<Node__ArticlePath>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Node__ArticleBody>;
  relationships?: Maybe<Node__ArticleRelationships>;
  field_image?: Maybe<Node__ArticleField_Image>;
};


export type Node__ArticleRevision_TimestampArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Node__ArticleCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Node__ArticleChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Node__ArticleBody = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type Node__ArticleBodyFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  processed?: Maybe<StringQueryOperatorInput>;
};

export type Node__ArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node__ArticleEdge>;
  nodes: Array<Node__Article>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Node__ArticleGroupConnection>;
};


export type Node__ArticleConnectionDistinctArgs = {
  field: Node__ArticleFieldsEnum;
};


export type Node__ArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Node__ArticleFieldsEnum;
};

export type Node__ArticleEdge = {
  next?: Maybe<Node__Article>;
  node: Node__Article;
  previous?: Maybe<Node__Article>;
};

export type Node__ArticleField_Image = {
  alt?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Node__ArticleField_ImageFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type Node__ArticleFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'drupal_internal__vid'
  | 'langcode'
  | 'revision_timestamp'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'default_langcode'
  | 'moderation_state'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'body___value'
  | 'body___format'
  | 'body___processed'
  | 'relationships___node_type___id'
  | 'relationships___node_type___parent___id'
  | 'relationships___node_type___parent___children'
  | 'relationships___node_type___children'
  | 'relationships___node_type___children___id'
  | 'relationships___node_type___children___children'
  | 'relationships___node_type___internal___content'
  | 'relationships___node_type___internal___contentDigest'
  | 'relationships___node_type___internal___description'
  | 'relationships___node_type___internal___fieldOwners'
  | 'relationships___node_type___internal___ignoreType'
  | 'relationships___node_type___internal___mediaType'
  | 'relationships___node_type___internal___owner'
  | 'relationships___node_type___internal___type'
  | 'relationships___node_type___drupal_id'
  | 'relationships___node_type___langcode'
  | 'relationships___node_type___status'
  | 'relationships___node_type___dependencies___module'
  | 'relationships___node_type___name'
  | 'relationships___node_type___drupal_internal__type'
  | 'relationships___node_type___description'
  | 'relationships___node_type___help'
  | 'relationships___node_type___new_revision'
  | 'relationships___node_type___preview_mode'
  | 'relationships___node_type___display_submitted'
  | 'relationships___node_type___relationships___node__article'
  | 'relationships___node_type___relationships___node__page'
  | 'relationships___node_type___relationships___node__recipe'
  | 'relationships___revision_uid___id'
  | 'relationships___revision_uid___parent___id'
  | 'relationships___revision_uid___parent___children'
  | 'relationships___revision_uid___children'
  | 'relationships___revision_uid___children___id'
  | 'relationships___revision_uid___children___children'
  | 'relationships___revision_uid___internal___content'
  | 'relationships___revision_uid___internal___contentDigest'
  | 'relationships___revision_uid___internal___description'
  | 'relationships___revision_uid___internal___fieldOwners'
  | 'relationships___revision_uid___internal___ignoreType'
  | 'relationships___revision_uid___internal___mediaType'
  | 'relationships___revision_uid___internal___owner'
  | 'relationships___revision_uid___internal___type'
  | 'relationships___revision_uid___drupal_id'
  | 'relationships___revision_uid___name'
  | 'relationships___revision_uid___relationships___block_content__banner_block'
  | 'relationships___revision_uid___relationships___block_content__disclaimer_block'
  | 'relationships___revision_uid___relationships___block_content__footer_promo_block'
  | 'relationships___revision_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___revision_uid___relationships___taxonomy_term__tags'
  | 'relationships___revision_uid___relationships___node__article'
  | 'relationships___revision_uid___relationships___node__recipe'
  | 'relationships___revision_uid___relationships___node__page'
  | 'relationships___uid___id'
  | 'relationships___uid___parent___id'
  | 'relationships___uid___parent___children'
  | 'relationships___uid___children'
  | 'relationships___uid___children___id'
  | 'relationships___uid___children___children'
  | 'relationships___uid___internal___content'
  | 'relationships___uid___internal___contentDigest'
  | 'relationships___uid___internal___description'
  | 'relationships___uid___internal___fieldOwners'
  | 'relationships___uid___internal___ignoreType'
  | 'relationships___uid___internal___mediaType'
  | 'relationships___uid___internal___owner'
  | 'relationships___uid___internal___type'
  | 'relationships___uid___drupal_id'
  | 'relationships___uid___name'
  | 'relationships___uid___relationships___block_content__banner_block'
  | 'relationships___uid___relationships___block_content__disclaimer_block'
  | 'relationships___uid___relationships___block_content__footer_promo_block'
  | 'relationships___uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___uid___relationships___taxonomy_term__tags'
  | 'relationships___uid___relationships___node__article'
  | 'relationships___uid___relationships___node__recipe'
  | 'relationships___uid___relationships___node__page'
  | 'relationships___field_image___id'
  | 'relationships___field_image___parent___id'
  | 'relationships___field_image___parent___children'
  | 'relationships___field_image___children'
  | 'relationships___field_image___children___id'
  | 'relationships___field_image___children___children'
  | 'relationships___field_image___internal___content'
  | 'relationships___field_image___internal___contentDigest'
  | 'relationships___field_image___internal___description'
  | 'relationships___field_image___internal___fieldOwners'
  | 'relationships___field_image___internal___ignoreType'
  | 'relationships___field_image___internal___mediaType'
  | 'relationships___field_image___internal___owner'
  | 'relationships___field_image___internal___type'
  | 'relationships___field_image___drupal_id'
  | 'relationships___field_image___drupal_internal__fid'
  | 'relationships___field_image___langcode'
  | 'relationships___field_image___filename'
  | 'relationships___field_image___uri___value'
  | 'relationships___field_image___uri___url'
  | 'relationships___field_image___filemime'
  | 'relationships___field_image___filesize'
  | 'relationships___field_image___status'
  | 'relationships___field_image___created'
  | 'relationships___field_image___changed'
  | 'relationships___field_image___relationships___node__recipe'
  | 'relationships___field_image___relationships___node__article'
  | 'relationships___field_image___relationships___block_content__footer_promo_block'
  | 'relationships___field_image___relationships___block_content__banner_block'
  | 'relationships___field_image___localFile___sourceInstanceName'
  | 'relationships___field_image___localFile___absolutePath'
  | 'relationships___field_image___localFile___relativePath'
  | 'relationships___field_image___localFile___extension'
  | 'relationships___field_image___localFile___size'
  | 'relationships___field_image___localFile___prettySize'
  | 'relationships___field_image___localFile___modifiedTime'
  | 'relationships___field_image___localFile___accessTime'
  | 'relationships___field_image___localFile___changeTime'
  | 'relationships___field_image___localFile___birthTime'
  | 'relationships___field_image___localFile___root'
  | 'relationships___field_image___localFile___dir'
  | 'relationships___field_image___localFile___base'
  | 'relationships___field_image___localFile___ext'
  | 'relationships___field_image___localFile___name'
  | 'relationships___field_image___localFile___relativeDirectory'
  | 'relationships___field_image___localFile___dev'
  | 'relationships___field_image___localFile___mode'
  | 'relationships___field_image___localFile___nlink'
  | 'relationships___field_image___localFile___uid'
  | 'relationships___field_image___localFile___gid'
  | 'relationships___field_image___localFile___rdev'
  | 'relationships___field_image___localFile___ino'
  | 'relationships___field_image___localFile___atimeMs'
  | 'relationships___field_image___localFile___mtimeMs'
  | 'relationships___field_image___localFile___ctimeMs'
  | 'relationships___field_image___localFile___atime'
  | 'relationships___field_image___localFile___mtime'
  | 'relationships___field_image___localFile___ctime'
  | 'relationships___field_image___localFile___birthtime'
  | 'relationships___field_image___localFile___birthtimeMs'
  | 'relationships___field_image___localFile___blksize'
  | 'relationships___field_image___localFile___blocks'
  | 'relationships___field_image___localFile___url'
  | 'relationships___field_image___localFile___id'
  | 'relationships___field_image___localFile___children'
  | 'relationships___field_tags'
  | 'relationships___field_tags___id'
  | 'relationships___field_tags___parent___id'
  | 'relationships___field_tags___parent___children'
  | 'relationships___field_tags___children'
  | 'relationships___field_tags___children___id'
  | 'relationships___field_tags___children___children'
  | 'relationships___field_tags___internal___content'
  | 'relationships___field_tags___internal___contentDigest'
  | 'relationships___field_tags___internal___description'
  | 'relationships___field_tags___internal___fieldOwners'
  | 'relationships___field_tags___internal___ignoreType'
  | 'relationships___field_tags___internal___mediaType'
  | 'relationships___field_tags___internal___owner'
  | 'relationships___field_tags___internal___type'
  | 'relationships___field_tags___drupal_id'
  | 'relationships___field_tags___drupal_internal__tid'
  | 'relationships___field_tags___drupal_internal__revision_id'
  | 'relationships___field_tags___langcode'
  | 'relationships___field_tags___revision_created'
  | 'relationships___field_tags___status'
  | 'relationships___field_tags___name'
  | 'relationships___field_tags___weight'
  | 'relationships___field_tags___changed'
  | 'relationships___field_tags___default_langcode'
  | 'relationships___field_tags___revision_translation_affected'
  | 'relationships___field_tags___path___alias'
  | 'relationships___field_tags___path___pid'
  | 'relationships___field_tags___path___langcode'
  | 'relationships___field_tags___content_translation_source'
  | 'relationships___field_tags___content_translation_outdated'
  | 'relationships___field_tags___content_translation_created'
  | 'relationships___field_tags___relationships___node__article'
  | 'relationships___field_tags___relationships___node__recipe'
  | 'field_image___alt'
  | 'field_image___width'
  | 'field_image___height';

export type Node__ArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__vid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_timestamp?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  promote?: Maybe<BooleanQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  moderation_state?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<Node__ArticlePathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  body?: Maybe<Node__ArticleBodyFilterInput>;
  relationships?: Maybe<Node__ArticleRelationshipsFilterInput>;
  field_image?: Maybe<Node__ArticleField_ImageFilterInput>;
};

export type Node__ArticleFilterListInput = {
  elemMatch?: Maybe<Node__ArticleFilterInput>;
};

export type Node__ArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node__ArticleEdge>;
  nodes: Array<Node__Article>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Node__ArticlePath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
};

export type Node__ArticlePathFilterInput = {
  alias?: Maybe<StringQueryOperatorInput>;
  pid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
};

export type Node__ArticleRelationships = {
  node_type?: Maybe<Node_Type__Node_Type>;
  revision_uid?: Maybe<User__User>;
  uid?: Maybe<User__User>;
  field_image?: Maybe<File__File>;
  field_tags?: Maybe<Array<Maybe<Taxonomy_Term__Tags>>>;
};

export type Node__ArticleRelationshipsFilterInput = {
  node_type?: Maybe<Node_Type__Node_TypeFilterInput>;
  revision_uid?: Maybe<User__UserFilterInput>;
  uid?: Maybe<User__UserFilterInput>;
  field_image?: Maybe<File__FileFilterInput>;
  field_tags?: Maybe<Taxonomy_Term__TagsFilterListInput>;
};

export type Node__ArticleSortInput = {
  fields?: Maybe<Array<Maybe<Node__ArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Node__Page = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['Int']>;
  drupal_internal__vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_timestamp?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<Node__PagePath>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Node__PageBody>;
  relationships?: Maybe<Node__PageRelationships>;
};


export type Node__PageRevision_TimestampArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Node__PageCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Node__PageChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Node__PageBody = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type Node__PageBodyFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  processed?: Maybe<StringQueryOperatorInput>;
};

export type Node__PageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node__PageEdge>;
  nodes: Array<Node__Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Node__PageGroupConnection>;
};


export type Node__PageConnectionDistinctArgs = {
  field: Node__PageFieldsEnum;
};


export type Node__PageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Node__PageFieldsEnum;
};

export type Node__PageEdge = {
  next?: Maybe<Node__Page>;
  node: Node__Page;
  previous?: Maybe<Node__Page>;
};

export type Node__PageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'drupal_internal__vid'
  | 'langcode'
  | 'revision_timestamp'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'default_langcode'
  | 'moderation_state'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'body___value'
  | 'body___format'
  | 'body___processed'
  | 'relationships___node_type___id'
  | 'relationships___node_type___parent___id'
  | 'relationships___node_type___parent___children'
  | 'relationships___node_type___children'
  | 'relationships___node_type___children___id'
  | 'relationships___node_type___children___children'
  | 'relationships___node_type___internal___content'
  | 'relationships___node_type___internal___contentDigest'
  | 'relationships___node_type___internal___description'
  | 'relationships___node_type___internal___fieldOwners'
  | 'relationships___node_type___internal___ignoreType'
  | 'relationships___node_type___internal___mediaType'
  | 'relationships___node_type___internal___owner'
  | 'relationships___node_type___internal___type'
  | 'relationships___node_type___drupal_id'
  | 'relationships___node_type___langcode'
  | 'relationships___node_type___status'
  | 'relationships___node_type___dependencies___module'
  | 'relationships___node_type___name'
  | 'relationships___node_type___drupal_internal__type'
  | 'relationships___node_type___description'
  | 'relationships___node_type___help'
  | 'relationships___node_type___new_revision'
  | 'relationships___node_type___preview_mode'
  | 'relationships___node_type___display_submitted'
  | 'relationships___node_type___relationships___node__article'
  | 'relationships___node_type___relationships___node__page'
  | 'relationships___node_type___relationships___node__recipe'
  | 'relationships___revision_uid___id'
  | 'relationships___revision_uid___parent___id'
  | 'relationships___revision_uid___parent___children'
  | 'relationships___revision_uid___children'
  | 'relationships___revision_uid___children___id'
  | 'relationships___revision_uid___children___children'
  | 'relationships___revision_uid___internal___content'
  | 'relationships___revision_uid___internal___contentDigest'
  | 'relationships___revision_uid___internal___description'
  | 'relationships___revision_uid___internal___fieldOwners'
  | 'relationships___revision_uid___internal___ignoreType'
  | 'relationships___revision_uid___internal___mediaType'
  | 'relationships___revision_uid___internal___owner'
  | 'relationships___revision_uid___internal___type'
  | 'relationships___revision_uid___drupal_id'
  | 'relationships___revision_uid___name'
  | 'relationships___revision_uid___relationships___block_content__banner_block'
  | 'relationships___revision_uid___relationships___block_content__disclaimer_block'
  | 'relationships___revision_uid___relationships___block_content__footer_promo_block'
  | 'relationships___revision_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___revision_uid___relationships___taxonomy_term__tags'
  | 'relationships___revision_uid___relationships___node__article'
  | 'relationships___revision_uid___relationships___node__recipe'
  | 'relationships___revision_uid___relationships___node__page'
  | 'relationships___uid___id'
  | 'relationships___uid___parent___id'
  | 'relationships___uid___parent___children'
  | 'relationships___uid___children'
  | 'relationships___uid___children___id'
  | 'relationships___uid___children___children'
  | 'relationships___uid___internal___content'
  | 'relationships___uid___internal___contentDigest'
  | 'relationships___uid___internal___description'
  | 'relationships___uid___internal___fieldOwners'
  | 'relationships___uid___internal___ignoreType'
  | 'relationships___uid___internal___mediaType'
  | 'relationships___uid___internal___owner'
  | 'relationships___uid___internal___type'
  | 'relationships___uid___drupal_id'
  | 'relationships___uid___name'
  | 'relationships___uid___relationships___block_content__banner_block'
  | 'relationships___uid___relationships___block_content__disclaimer_block'
  | 'relationships___uid___relationships___block_content__footer_promo_block'
  | 'relationships___uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___uid___relationships___taxonomy_term__tags'
  | 'relationships___uid___relationships___node__article'
  | 'relationships___uid___relationships___node__recipe'
  | 'relationships___uid___relationships___node__page';

export type Node__PageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__vid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_timestamp?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  promote?: Maybe<BooleanQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  moderation_state?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<Node__PagePathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  body?: Maybe<Node__PageBodyFilterInput>;
  relationships?: Maybe<Node__PageRelationshipsFilterInput>;
};

export type Node__PageFilterListInput = {
  elemMatch?: Maybe<Node__PageFilterInput>;
};

export type Node__PageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node__PageEdge>;
  nodes: Array<Node__Page>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Node__PagePath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
};

export type Node__PagePathFilterInput = {
  alias?: Maybe<StringQueryOperatorInput>;
  pid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
};

export type Node__PageRelationships = {
  node_type?: Maybe<Node_Type__Node_Type>;
  revision_uid?: Maybe<User__User>;
  uid?: Maybe<User__User>;
};

export type Node__PageRelationshipsFilterInput = {
  node_type?: Maybe<Node_Type__Node_TypeFilterInput>;
  revision_uid?: Maybe<User__UserFilterInput>;
  uid?: Maybe<User__UserFilterInput>;
};

export type Node__PageSortInput = {
  fields?: Maybe<Array<Maybe<Node__PageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Node__Recipe = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['Int']>;
  drupal_internal__vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_timestamp?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<Node__RecipePath>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  field_cooking_time?: Maybe<Scalars['Int']>;
  field_difficulty?: Maybe<Scalars['String']>;
  field_ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  field_number_of_servings?: Maybe<Scalars['Int']>;
  field_preparation_time?: Maybe<Scalars['Int']>;
  field_recipe_instruction?: Maybe<Node__RecipeField_Recipe_Instruction>;
  field_summary?: Maybe<Node__RecipeField_Summary>;
  relationships?: Maybe<Node__RecipeRelationships>;
  field_image?: Maybe<Node__RecipeField_Image>;
  fields?: Maybe<Node__RecipeFields>;
};


export type Node__RecipeRevision_TimestampArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Node__RecipeCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Node__RecipeChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Node__RecipeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node__RecipeEdge>;
  nodes: Array<Node__Recipe>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Node__RecipeGroupConnection>;
};


export type Node__RecipeConnectionDistinctArgs = {
  field: Node__RecipeFieldsEnum;
};


export type Node__RecipeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Node__RecipeFieldsEnum;
};

export type Node__RecipeEdge = {
  next?: Maybe<Node__Recipe>;
  node: Node__Recipe;
  previous?: Maybe<Node__Recipe>;
};

export type Node__RecipeField_Image = {
  alt?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Node__RecipeField_ImageFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type Node__RecipeField_Recipe_Instruction = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type Node__RecipeField_Recipe_InstructionFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  processed?: Maybe<StringQueryOperatorInput>;
};

export type Node__RecipeField_Summary = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type Node__RecipeField_SummaryFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  processed?: Maybe<StringQueryOperatorInput>;
};

export type Node__RecipeFields = {
  slug?: Maybe<Scalars['String']>;
};

export type Node__RecipeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'drupal_internal__vid'
  | 'langcode'
  | 'revision_timestamp'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'default_langcode'
  | 'moderation_state'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'field_cooking_time'
  | 'field_difficulty'
  | 'field_ingredients'
  | 'field_number_of_servings'
  | 'field_preparation_time'
  | 'field_recipe_instruction___value'
  | 'field_recipe_instruction___format'
  | 'field_recipe_instruction___processed'
  | 'field_summary___value'
  | 'field_summary___format'
  | 'field_summary___processed'
  | 'relationships___node_type___id'
  | 'relationships___node_type___parent___id'
  | 'relationships___node_type___parent___children'
  | 'relationships___node_type___children'
  | 'relationships___node_type___children___id'
  | 'relationships___node_type___children___children'
  | 'relationships___node_type___internal___content'
  | 'relationships___node_type___internal___contentDigest'
  | 'relationships___node_type___internal___description'
  | 'relationships___node_type___internal___fieldOwners'
  | 'relationships___node_type___internal___ignoreType'
  | 'relationships___node_type___internal___mediaType'
  | 'relationships___node_type___internal___owner'
  | 'relationships___node_type___internal___type'
  | 'relationships___node_type___drupal_id'
  | 'relationships___node_type___langcode'
  | 'relationships___node_type___status'
  | 'relationships___node_type___dependencies___module'
  | 'relationships___node_type___name'
  | 'relationships___node_type___drupal_internal__type'
  | 'relationships___node_type___description'
  | 'relationships___node_type___help'
  | 'relationships___node_type___new_revision'
  | 'relationships___node_type___preview_mode'
  | 'relationships___node_type___display_submitted'
  | 'relationships___node_type___relationships___node__article'
  | 'relationships___node_type___relationships___node__page'
  | 'relationships___node_type___relationships___node__recipe'
  | 'relationships___revision_uid___id'
  | 'relationships___revision_uid___parent___id'
  | 'relationships___revision_uid___parent___children'
  | 'relationships___revision_uid___children'
  | 'relationships___revision_uid___children___id'
  | 'relationships___revision_uid___children___children'
  | 'relationships___revision_uid___internal___content'
  | 'relationships___revision_uid___internal___contentDigest'
  | 'relationships___revision_uid___internal___description'
  | 'relationships___revision_uid___internal___fieldOwners'
  | 'relationships___revision_uid___internal___ignoreType'
  | 'relationships___revision_uid___internal___mediaType'
  | 'relationships___revision_uid___internal___owner'
  | 'relationships___revision_uid___internal___type'
  | 'relationships___revision_uid___drupal_id'
  | 'relationships___revision_uid___name'
  | 'relationships___revision_uid___relationships___block_content__banner_block'
  | 'relationships___revision_uid___relationships___block_content__disclaimer_block'
  | 'relationships___revision_uid___relationships___block_content__footer_promo_block'
  | 'relationships___revision_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___revision_uid___relationships___taxonomy_term__tags'
  | 'relationships___revision_uid___relationships___node__article'
  | 'relationships___revision_uid___relationships___node__recipe'
  | 'relationships___revision_uid___relationships___node__page'
  | 'relationships___uid___id'
  | 'relationships___uid___parent___id'
  | 'relationships___uid___parent___children'
  | 'relationships___uid___children'
  | 'relationships___uid___children___id'
  | 'relationships___uid___children___children'
  | 'relationships___uid___internal___content'
  | 'relationships___uid___internal___contentDigest'
  | 'relationships___uid___internal___description'
  | 'relationships___uid___internal___fieldOwners'
  | 'relationships___uid___internal___ignoreType'
  | 'relationships___uid___internal___mediaType'
  | 'relationships___uid___internal___owner'
  | 'relationships___uid___internal___type'
  | 'relationships___uid___drupal_id'
  | 'relationships___uid___name'
  | 'relationships___uid___relationships___block_content__banner_block'
  | 'relationships___uid___relationships___block_content__disclaimer_block'
  | 'relationships___uid___relationships___block_content__footer_promo_block'
  | 'relationships___uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___uid___relationships___taxonomy_term__tags'
  | 'relationships___uid___relationships___node__article'
  | 'relationships___uid___relationships___node__recipe'
  | 'relationships___uid___relationships___node__page'
  | 'relationships___field_image___id'
  | 'relationships___field_image___parent___id'
  | 'relationships___field_image___parent___children'
  | 'relationships___field_image___children'
  | 'relationships___field_image___children___id'
  | 'relationships___field_image___children___children'
  | 'relationships___field_image___internal___content'
  | 'relationships___field_image___internal___contentDigest'
  | 'relationships___field_image___internal___description'
  | 'relationships___field_image___internal___fieldOwners'
  | 'relationships___field_image___internal___ignoreType'
  | 'relationships___field_image___internal___mediaType'
  | 'relationships___field_image___internal___owner'
  | 'relationships___field_image___internal___type'
  | 'relationships___field_image___drupal_id'
  | 'relationships___field_image___drupal_internal__fid'
  | 'relationships___field_image___langcode'
  | 'relationships___field_image___filename'
  | 'relationships___field_image___uri___value'
  | 'relationships___field_image___uri___url'
  | 'relationships___field_image___filemime'
  | 'relationships___field_image___filesize'
  | 'relationships___field_image___status'
  | 'relationships___field_image___created'
  | 'relationships___field_image___changed'
  | 'relationships___field_image___relationships___node__recipe'
  | 'relationships___field_image___relationships___node__article'
  | 'relationships___field_image___relationships___block_content__footer_promo_block'
  | 'relationships___field_image___relationships___block_content__banner_block'
  | 'relationships___field_image___localFile___sourceInstanceName'
  | 'relationships___field_image___localFile___absolutePath'
  | 'relationships___field_image___localFile___relativePath'
  | 'relationships___field_image___localFile___extension'
  | 'relationships___field_image___localFile___size'
  | 'relationships___field_image___localFile___prettySize'
  | 'relationships___field_image___localFile___modifiedTime'
  | 'relationships___field_image___localFile___accessTime'
  | 'relationships___field_image___localFile___changeTime'
  | 'relationships___field_image___localFile___birthTime'
  | 'relationships___field_image___localFile___root'
  | 'relationships___field_image___localFile___dir'
  | 'relationships___field_image___localFile___base'
  | 'relationships___field_image___localFile___ext'
  | 'relationships___field_image___localFile___name'
  | 'relationships___field_image___localFile___relativeDirectory'
  | 'relationships___field_image___localFile___dev'
  | 'relationships___field_image___localFile___mode'
  | 'relationships___field_image___localFile___nlink'
  | 'relationships___field_image___localFile___uid'
  | 'relationships___field_image___localFile___gid'
  | 'relationships___field_image___localFile___rdev'
  | 'relationships___field_image___localFile___ino'
  | 'relationships___field_image___localFile___atimeMs'
  | 'relationships___field_image___localFile___mtimeMs'
  | 'relationships___field_image___localFile___ctimeMs'
  | 'relationships___field_image___localFile___atime'
  | 'relationships___field_image___localFile___mtime'
  | 'relationships___field_image___localFile___ctime'
  | 'relationships___field_image___localFile___birthtime'
  | 'relationships___field_image___localFile___birthtimeMs'
  | 'relationships___field_image___localFile___blksize'
  | 'relationships___field_image___localFile___blocks'
  | 'relationships___field_image___localFile___url'
  | 'relationships___field_image___localFile___id'
  | 'relationships___field_image___localFile___children'
  | 'relationships___field_recipe_category'
  | 'relationships___field_recipe_category___id'
  | 'relationships___field_recipe_category___parent___id'
  | 'relationships___field_recipe_category___parent___children'
  | 'relationships___field_recipe_category___children'
  | 'relationships___field_recipe_category___children___id'
  | 'relationships___field_recipe_category___children___children'
  | 'relationships___field_recipe_category___internal___content'
  | 'relationships___field_recipe_category___internal___contentDigest'
  | 'relationships___field_recipe_category___internal___description'
  | 'relationships___field_recipe_category___internal___fieldOwners'
  | 'relationships___field_recipe_category___internal___ignoreType'
  | 'relationships___field_recipe_category___internal___mediaType'
  | 'relationships___field_recipe_category___internal___owner'
  | 'relationships___field_recipe_category___internal___type'
  | 'relationships___field_recipe_category___drupal_id'
  | 'relationships___field_recipe_category___drupal_internal__tid'
  | 'relationships___field_recipe_category___drupal_internal__revision_id'
  | 'relationships___field_recipe_category___langcode'
  | 'relationships___field_recipe_category___revision_created'
  | 'relationships___field_recipe_category___status'
  | 'relationships___field_recipe_category___name'
  | 'relationships___field_recipe_category___weight'
  | 'relationships___field_recipe_category___changed'
  | 'relationships___field_recipe_category___default_langcode'
  | 'relationships___field_recipe_category___revision_translation_affected'
  | 'relationships___field_recipe_category___path___alias'
  | 'relationships___field_recipe_category___path___pid'
  | 'relationships___field_recipe_category___path___langcode'
  | 'relationships___field_recipe_category___content_translation_source'
  | 'relationships___field_recipe_category___content_translation_outdated'
  | 'relationships___field_recipe_category___content_translation_created'
  | 'relationships___field_recipe_category___relationships___node__recipe'
  | 'relationships___field_tags'
  | 'relationships___field_tags___id'
  | 'relationships___field_tags___parent___id'
  | 'relationships___field_tags___parent___children'
  | 'relationships___field_tags___children'
  | 'relationships___field_tags___children___id'
  | 'relationships___field_tags___children___children'
  | 'relationships___field_tags___internal___content'
  | 'relationships___field_tags___internal___contentDigest'
  | 'relationships___field_tags___internal___description'
  | 'relationships___field_tags___internal___fieldOwners'
  | 'relationships___field_tags___internal___ignoreType'
  | 'relationships___field_tags___internal___mediaType'
  | 'relationships___field_tags___internal___owner'
  | 'relationships___field_tags___internal___type'
  | 'relationships___field_tags___drupal_id'
  | 'relationships___field_tags___drupal_internal__tid'
  | 'relationships___field_tags___drupal_internal__revision_id'
  | 'relationships___field_tags___langcode'
  | 'relationships___field_tags___revision_created'
  | 'relationships___field_tags___status'
  | 'relationships___field_tags___name'
  | 'relationships___field_tags___weight'
  | 'relationships___field_tags___changed'
  | 'relationships___field_tags___default_langcode'
  | 'relationships___field_tags___revision_translation_affected'
  | 'relationships___field_tags___path___alias'
  | 'relationships___field_tags___path___pid'
  | 'relationships___field_tags___path___langcode'
  | 'relationships___field_tags___content_translation_source'
  | 'relationships___field_tags___content_translation_outdated'
  | 'relationships___field_tags___content_translation_created'
  | 'relationships___field_tags___relationships___node__article'
  | 'relationships___field_tags___relationships___node__recipe'
  | 'field_image___alt'
  | 'field_image___width'
  | 'field_image___height'
  | 'fields___slug';

export type Node__RecipeFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type Node__RecipeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__vid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_timestamp?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  promote?: Maybe<BooleanQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  moderation_state?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<Node__RecipePathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  field_cooking_time?: Maybe<IntQueryOperatorInput>;
  field_difficulty?: Maybe<StringQueryOperatorInput>;
  field_ingredients?: Maybe<StringQueryOperatorInput>;
  field_number_of_servings?: Maybe<IntQueryOperatorInput>;
  field_preparation_time?: Maybe<IntQueryOperatorInput>;
  field_recipe_instruction?: Maybe<Node__RecipeField_Recipe_InstructionFilterInput>;
  field_summary?: Maybe<Node__RecipeField_SummaryFilterInput>;
  relationships?: Maybe<Node__RecipeRelationshipsFilterInput>;
  field_image?: Maybe<Node__RecipeField_ImageFilterInput>;
  fields?: Maybe<Node__RecipeFieldsFilterInput>;
};

export type Node__RecipeFilterListInput = {
  elemMatch?: Maybe<Node__RecipeFilterInput>;
};

export type Node__RecipeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node__RecipeEdge>;
  nodes: Array<Node__Recipe>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Node__RecipePath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
};

export type Node__RecipePathFilterInput = {
  alias?: Maybe<StringQueryOperatorInput>;
  pid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
};

export type Node__RecipeRelationships = {
  node_type?: Maybe<Node_Type__Node_Type>;
  revision_uid?: Maybe<User__User>;
  uid?: Maybe<User__User>;
  field_image?: Maybe<File__File>;
  field_recipe_category?: Maybe<Array<Maybe<Taxonomy_Term__Recipe_Category>>>;
  field_tags?: Maybe<Array<Maybe<Taxonomy_Term__Tags>>>;
};

export type Node__RecipeRelationshipsFilterInput = {
  node_type?: Maybe<Node_Type__Node_TypeFilterInput>;
  revision_uid?: Maybe<User__UserFilterInput>;
  uid?: Maybe<User__UserFilterInput>;
  field_image?: Maybe<File__FileFilterInput>;
  field_recipe_category?: Maybe<Taxonomy_Term__Recipe_CategoryFilterListInput>;
  field_tags?: Maybe<Taxonomy_Term__TagsFilterListInput>;
};

export type Node__RecipeSortInput = {
  fields?: Maybe<Array<Maybe<Node__RecipeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Node_Type__Node_Type = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Node_Type__Node_TypeDependencies>;
  name?: Maybe<Scalars['String']>;
  drupal_internal__type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  help?: Maybe<Scalars['String']>;
  new_revision?: Maybe<Scalars['Boolean']>;
  preview_mode?: Maybe<Scalars['Int']>;
  display_submitted?: Maybe<Scalars['Boolean']>;
  relationships?: Maybe<Node_Type__Node_TypeRelationships>;
  third_party_settings?: Maybe<Node_Type__Node_TypeThird_Party_Settings>;
};

export type Node_Type__Node_TypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node_Type__Node_TypeEdge>;
  nodes: Array<Node_Type__Node_Type>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Node_Type__Node_TypeGroupConnection>;
};


export type Node_Type__Node_TypeConnectionDistinctArgs = {
  field: Node_Type__Node_TypeFieldsEnum;
};


export type Node_Type__Node_TypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Node_Type__Node_TypeFieldsEnum;
};

export type Node_Type__Node_TypeDependencies = {
  module?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Node_Type__Node_TypeDependenciesFilterInput = {
  module?: Maybe<StringQueryOperatorInput>;
};

export type Node_Type__Node_TypeEdge = {
  next?: Maybe<Node_Type__Node_Type>;
  node: Node_Type__Node_Type;
  previous?: Maybe<Node_Type__Node_Type>;
};

export type Node_Type__Node_TypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'langcode'
  | 'status'
  | 'dependencies___module'
  | 'name'
  | 'drupal_internal__type'
  | 'description'
  | 'help'
  | 'new_revision'
  | 'preview_mode'
  | 'display_submitted'
  | 'relationships___node__article'
  | 'relationships___node__article___id'
  | 'relationships___node__article___parent___id'
  | 'relationships___node__article___parent___children'
  | 'relationships___node__article___children'
  | 'relationships___node__article___children___id'
  | 'relationships___node__article___children___children'
  | 'relationships___node__article___internal___content'
  | 'relationships___node__article___internal___contentDigest'
  | 'relationships___node__article___internal___description'
  | 'relationships___node__article___internal___fieldOwners'
  | 'relationships___node__article___internal___ignoreType'
  | 'relationships___node__article___internal___mediaType'
  | 'relationships___node__article___internal___owner'
  | 'relationships___node__article___internal___type'
  | 'relationships___node__article___drupal_id'
  | 'relationships___node__article___drupal_internal__nid'
  | 'relationships___node__article___drupal_internal__vid'
  | 'relationships___node__article___langcode'
  | 'relationships___node__article___revision_timestamp'
  | 'relationships___node__article___status'
  | 'relationships___node__article___title'
  | 'relationships___node__article___created'
  | 'relationships___node__article___changed'
  | 'relationships___node__article___promote'
  | 'relationships___node__article___sticky'
  | 'relationships___node__article___default_langcode'
  | 'relationships___node__article___moderation_state'
  | 'relationships___node__article___path___alias'
  | 'relationships___node__article___path___pid'
  | 'relationships___node__article___path___langcode'
  | 'relationships___node__article___content_translation_source'
  | 'relationships___node__article___content_translation_outdated'
  | 'relationships___node__article___body___value'
  | 'relationships___node__article___body___format'
  | 'relationships___node__article___body___processed'
  | 'relationships___node__article___relationships___field_tags'
  | 'relationships___node__article___field_image___alt'
  | 'relationships___node__article___field_image___width'
  | 'relationships___node__article___field_image___height'
  | 'relationships___node__page'
  | 'relationships___node__page___id'
  | 'relationships___node__page___parent___id'
  | 'relationships___node__page___parent___children'
  | 'relationships___node__page___children'
  | 'relationships___node__page___children___id'
  | 'relationships___node__page___children___children'
  | 'relationships___node__page___internal___content'
  | 'relationships___node__page___internal___contentDigest'
  | 'relationships___node__page___internal___description'
  | 'relationships___node__page___internal___fieldOwners'
  | 'relationships___node__page___internal___ignoreType'
  | 'relationships___node__page___internal___mediaType'
  | 'relationships___node__page___internal___owner'
  | 'relationships___node__page___internal___type'
  | 'relationships___node__page___drupal_id'
  | 'relationships___node__page___drupal_internal__nid'
  | 'relationships___node__page___drupal_internal__vid'
  | 'relationships___node__page___langcode'
  | 'relationships___node__page___revision_timestamp'
  | 'relationships___node__page___status'
  | 'relationships___node__page___title'
  | 'relationships___node__page___created'
  | 'relationships___node__page___changed'
  | 'relationships___node__page___promote'
  | 'relationships___node__page___sticky'
  | 'relationships___node__page___default_langcode'
  | 'relationships___node__page___moderation_state'
  | 'relationships___node__page___path___alias'
  | 'relationships___node__page___path___pid'
  | 'relationships___node__page___path___langcode'
  | 'relationships___node__page___content_translation_source'
  | 'relationships___node__page___content_translation_outdated'
  | 'relationships___node__page___body___value'
  | 'relationships___node__page___body___format'
  | 'relationships___node__page___body___processed'
  | 'relationships___node__recipe'
  | 'relationships___node__recipe___id'
  | 'relationships___node__recipe___parent___id'
  | 'relationships___node__recipe___parent___children'
  | 'relationships___node__recipe___children'
  | 'relationships___node__recipe___children___id'
  | 'relationships___node__recipe___children___children'
  | 'relationships___node__recipe___internal___content'
  | 'relationships___node__recipe___internal___contentDigest'
  | 'relationships___node__recipe___internal___description'
  | 'relationships___node__recipe___internal___fieldOwners'
  | 'relationships___node__recipe___internal___ignoreType'
  | 'relationships___node__recipe___internal___mediaType'
  | 'relationships___node__recipe___internal___owner'
  | 'relationships___node__recipe___internal___type'
  | 'relationships___node__recipe___drupal_id'
  | 'relationships___node__recipe___drupal_internal__nid'
  | 'relationships___node__recipe___drupal_internal__vid'
  | 'relationships___node__recipe___langcode'
  | 'relationships___node__recipe___revision_timestamp'
  | 'relationships___node__recipe___status'
  | 'relationships___node__recipe___title'
  | 'relationships___node__recipe___created'
  | 'relationships___node__recipe___changed'
  | 'relationships___node__recipe___promote'
  | 'relationships___node__recipe___sticky'
  | 'relationships___node__recipe___default_langcode'
  | 'relationships___node__recipe___moderation_state'
  | 'relationships___node__recipe___path___alias'
  | 'relationships___node__recipe___path___pid'
  | 'relationships___node__recipe___path___langcode'
  | 'relationships___node__recipe___content_translation_source'
  | 'relationships___node__recipe___content_translation_outdated'
  | 'relationships___node__recipe___field_cooking_time'
  | 'relationships___node__recipe___field_difficulty'
  | 'relationships___node__recipe___field_ingredients'
  | 'relationships___node__recipe___field_number_of_servings'
  | 'relationships___node__recipe___field_preparation_time'
  | 'relationships___node__recipe___field_recipe_instruction___value'
  | 'relationships___node__recipe___field_recipe_instruction___format'
  | 'relationships___node__recipe___field_recipe_instruction___processed'
  | 'relationships___node__recipe___field_summary___value'
  | 'relationships___node__recipe___field_summary___format'
  | 'relationships___node__recipe___field_summary___processed'
  | 'relationships___node__recipe___relationships___field_recipe_category'
  | 'relationships___node__recipe___relationships___field_tags'
  | 'relationships___node__recipe___field_image___alt'
  | 'relationships___node__recipe___field_image___width'
  | 'relationships___node__recipe___field_image___height'
  | 'relationships___node__recipe___fields___slug'
  | 'third_party_settings___menu_ui___parent';

export type Node_Type__Node_TypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  dependencies?: Maybe<Node_Type__Node_TypeDependenciesFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  drupal_internal__type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  help?: Maybe<StringQueryOperatorInput>;
  new_revision?: Maybe<BooleanQueryOperatorInput>;
  preview_mode?: Maybe<IntQueryOperatorInput>;
  display_submitted?: Maybe<BooleanQueryOperatorInput>;
  relationships?: Maybe<Node_Type__Node_TypeRelationshipsFilterInput>;
  third_party_settings?: Maybe<Node_Type__Node_TypeThird_Party_SettingsFilterInput>;
};

export type Node_Type__Node_TypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Node_Type__Node_TypeEdge>;
  nodes: Array<Node_Type__Node_Type>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Node_Type__Node_TypeRelationships = {
  node__article?: Maybe<Array<Maybe<Node__Article>>>;
  node__page?: Maybe<Array<Maybe<Node__Page>>>;
  node__recipe?: Maybe<Array<Maybe<Node__Recipe>>>;
};

export type Node_Type__Node_TypeRelationshipsFilterInput = {
  node__article?: Maybe<Node__ArticleFilterListInput>;
  node__page?: Maybe<Node__PageFilterListInput>;
  node__recipe?: Maybe<Node__RecipeFilterListInput>;
};

export type Node_Type__Node_TypeSortInput = {
  fields?: Maybe<Array<Maybe<Node_Type__Node_TypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Node_Type__Node_TypeThird_Party_Settings = {
  menu_ui?: Maybe<Node_Type__Node_TypeThird_Party_SettingsMenu_Ui>;
};

export type Node_Type__Node_TypeThird_Party_SettingsFilterInput = {
  menu_ui?: Maybe<Node_Type__Node_TypeThird_Party_SettingsMenu_UiFilterInput>;
};

export type Node_Type__Node_TypeThird_Party_SettingsMenu_Ui = {
  parent?: Maybe<Scalars['String']>;
};

export type Node_Type__Node_TypeThird_Party_SettingsMenu_UiFilterInput = {
  parent?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  userUser?: Maybe<User__User>;
  allUserUser: User__UserConnection;
  taxonomyTermTags?: Maybe<Taxonomy_Term__Tags>;
  allTaxonomyTermTags: Taxonomy_Term__TagsConnection;
  taxonomyTermRecipeCategory?: Maybe<Taxonomy_Term__Recipe_Category>;
  allTaxonomyTermRecipeCategory: Taxonomy_Term__Recipe_CategoryConnection;
  searchPageSearchPage?: Maybe<Search_Page__Search_Page>;
  allSearchPageSearchPage: Search_Page__Search_PageConnection;
  nodeTypeNodeType?: Maybe<Node_Type__Node_Type>;
  allNodeTypeNodeType: Node_Type__Node_TypeConnection;
  nodeRecipe?: Maybe<Node__Recipe>;
  allNodeRecipe: Node__RecipeConnection;
  nodePage?: Maybe<Node__Page>;
  allNodePage: Node__PageConnection;
  nodeArticle?: Maybe<Node__Article>;
  allNodeArticle: Node__ArticleConnection;
  menuMenu?: Maybe<Menu__Menu>;
  allMenuMenu: Menu__MenuConnection;
  mediaTypeMediaType?: Maybe<Media_Type__Media_Type>;
  allMediaTypeMediaType: Media_Type__Media_TypeConnection;
  fileFile?: Maybe<File__File>;
  allFileFile: File__FileConnection;
  dateFormatDateFormat?: Maybe<Date_Format__Date_Format>;
  allDateFormatDateFormat: Date_Format__Date_FormatConnection;
  contactFormContactForm?: Maybe<Contact_Form__Contact_Form>;
  allContactFormContactForm: Contact_Form__Contact_FormConnection;
  blockContentFooterPromoBlock?: Maybe<Block_Content__Footer_Promo_Block>;
  allBlockContentFooterPromoBlock: Block_Content__Footer_Promo_BlockConnection;
  blockContentDisclaimerBlock?: Maybe<Block_Content__Disclaimer_Block>;
  allBlockContentDisclaimerBlock: Block_Content__Disclaimer_BlockConnection;
  blockContentBannerBlock?: Maybe<Block_Content__Banner_Block>;
  allBlockContentBannerBlock: Block_Content__Banner_BlockConnection;
  blockBlock?: Maybe<Block__Block>;
  allBlockBlock: Block__BlockConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryUserUserArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relationships?: Maybe<User__UserRelationshipsFilterInput>;
};


export type QueryAllUserUserArgs = {
  filter?: Maybe<User__UserFilterInput>;
  sort?: Maybe<User__UserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryTaxonomyTermTagsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<Taxonomy_Term__TagsPathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  relationships?: Maybe<Taxonomy_Term__TagsRelationshipsFilterInput>;
};


export type QueryAllTaxonomyTermTagsArgs = {
  filter?: Maybe<Taxonomy_Term__TagsFilterInput>;
  sort?: Maybe<Taxonomy_Term__TagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryTaxonomyTermRecipeCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<Taxonomy_Term__Recipe_CategoryPathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  relationships?: Maybe<Taxonomy_Term__Recipe_CategoryRelationshipsFilterInput>;
};


export type QueryAllTaxonomyTermRecipeCategoryArgs = {
  filter?: Maybe<Taxonomy_Term__Recipe_CategoryFilterInput>;
  sort?: Maybe<Taxonomy_Term__Recipe_CategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySearchPageSearchPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  dependencies?: Maybe<Search_Page__Search_PageDependenciesFilterInput>;
  drupal_internal__id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  plugin?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSearchPageSearchPageArgs = {
  filter?: Maybe<Search_Page__Search_PageFilterInput>;
  sort?: Maybe<Search_Page__Search_PageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryNodeTypeNodeTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  dependencies?: Maybe<Node_Type__Node_TypeDependenciesFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  drupal_internal__type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  help?: Maybe<StringQueryOperatorInput>;
  new_revision?: Maybe<BooleanQueryOperatorInput>;
  preview_mode?: Maybe<IntQueryOperatorInput>;
  display_submitted?: Maybe<BooleanQueryOperatorInput>;
  relationships?: Maybe<Node_Type__Node_TypeRelationshipsFilterInput>;
  third_party_settings?: Maybe<Node_Type__Node_TypeThird_Party_SettingsFilterInput>;
};


export type QueryAllNodeTypeNodeTypeArgs = {
  filter?: Maybe<Node_Type__Node_TypeFilterInput>;
  sort?: Maybe<Node_Type__Node_TypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryNodeRecipeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__vid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_timestamp?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  promote?: Maybe<BooleanQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  moderation_state?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<Node__RecipePathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  field_cooking_time?: Maybe<IntQueryOperatorInput>;
  field_difficulty?: Maybe<StringQueryOperatorInput>;
  field_ingredients?: Maybe<StringQueryOperatorInput>;
  field_number_of_servings?: Maybe<IntQueryOperatorInput>;
  field_preparation_time?: Maybe<IntQueryOperatorInput>;
  field_recipe_instruction?: Maybe<Node__RecipeField_Recipe_InstructionFilterInput>;
  field_summary?: Maybe<Node__RecipeField_SummaryFilterInput>;
  relationships?: Maybe<Node__RecipeRelationshipsFilterInput>;
  field_image?: Maybe<Node__RecipeField_ImageFilterInput>;
  fields?: Maybe<Node__RecipeFieldsFilterInput>;
};


export type QueryAllNodeRecipeArgs = {
  filter?: Maybe<Node__RecipeFilterInput>;
  sort?: Maybe<Node__RecipeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryNodePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__vid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_timestamp?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  promote?: Maybe<BooleanQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  moderation_state?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<Node__PagePathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  body?: Maybe<Node__PageBodyFilterInput>;
  relationships?: Maybe<Node__PageRelationshipsFilterInput>;
};


export type QueryAllNodePageArgs = {
  filter?: Maybe<Node__PageFilterInput>;
  sort?: Maybe<Node__PageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryNodeArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__vid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_timestamp?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  promote?: Maybe<BooleanQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  moderation_state?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<Node__ArticlePathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  body?: Maybe<Node__ArticleBodyFilterInput>;
  relationships?: Maybe<Node__ArticleRelationshipsFilterInput>;
  field_image?: Maybe<Node__ArticleField_ImageFilterInput>;
};


export type QueryAllNodeArticleArgs = {
  filter?: Maybe<Node__ArticleFilterInput>;
  sort?: Maybe<Node__ArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMenuMenuArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllMenuMenuArgs = {
  filter?: Maybe<Menu__MenuFilterInput>;
  sort?: Maybe<Menu__MenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediaTypeMediaTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllMediaTypeMediaTypeArgs = {
  filter?: Maybe<Media_Type__Media_TypeFilterInput>;
  sort?: Maybe<Media_Type__Media_TypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileFileArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__fid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<File__FileUriFilterInput>;
  filemime?: Maybe<StringQueryOperatorInput>;
  filesize?: Maybe<IntQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  created?: Maybe<DateQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  relationships?: Maybe<File__FileRelationshipsFilterInput>;
  localFile?: Maybe<FileFilterInput>;
};


export type QueryAllFileFileArgs = {
  filter?: Maybe<File__FileFilterInput>;
  sort?: Maybe<File__FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDateFormatDateFormatArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllDateFormatDateFormatArgs = {
  filter?: Maybe<Date_Format__Date_FormatFilterInput>;
  sort?: Maybe<Date_Format__Date_FormatSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContactFormContactFormArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  drupal_internal__id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  recipients?: Maybe<StringQueryOperatorInput>;
  reply?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContactFormContactFormArgs = {
  filter?: Maybe<Contact_Form__Contact_FormFilterInput>;
  sort?: Maybe<Contact_Form__Contact_FormSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBlockContentFooterPromoBlockArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  reusable?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  field_content_link?: Maybe<Block_Content__Footer_Promo_BlockField_Content_LinkFilterInput>;
  field_summary?: Maybe<StringQueryOperatorInput>;
  field_title?: Maybe<StringQueryOperatorInput>;
  relationships?: Maybe<Block_Content__Footer_Promo_BlockRelationshipsFilterInput>;
  field_promo_image?: Maybe<Block_Content__Footer_Promo_BlockField_Promo_ImageFilterInput>;
};


export type QueryAllBlockContentFooterPromoBlockArgs = {
  filter?: Maybe<Block_Content__Footer_Promo_BlockFilterInput>;
  sort?: Maybe<Block_Content__Footer_Promo_BlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBlockContentDisclaimerBlockArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  reusable?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  field_copyright?: Maybe<Block_Content__Disclaimer_BlockField_CopyrightFilterInput>;
  field_disclaimer?: Maybe<Block_Content__Disclaimer_BlockField_DisclaimerFilterInput>;
  relationships?: Maybe<Block_Content__Disclaimer_BlockRelationshipsFilterInput>;
};


export type QueryAllBlockContentDisclaimerBlockArgs = {
  filter?: Maybe<Block_Content__Disclaimer_BlockFilterInput>;
  sort?: Maybe<Block_Content__Disclaimer_BlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBlockContentBannerBlockArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  reusable?: Maybe<BooleanQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  field_content_link?: Maybe<Block_Content__Banner_BlockField_Content_LinkFilterInput>;
  field_summary?: Maybe<StringQueryOperatorInput>;
  field_title?: Maybe<StringQueryOperatorInput>;
  relationships?: Maybe<Block_Content__Banner_BlockRelationshipsFilterInput>;
  field_banner_image?: Maybe<Block_Content__Banner_BlockField_Banner_ImageFilterInput>;
};


export type QueryAllBlockContentBannerBlockArgs = {
  filter?: Maybe<Block_Content__Banner_BlockFilterInput>;
  sort?: Maybe<Block_Content__Banner_BlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBlockBlockArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  dependencies?: Maybe<Block__BlockDependenciesFilterInput>;
  drupal_internal__id?: Maybe<StringQueryOperatorInput>;
  theme?: Maybe<StringQueryOperatorInput>;
  region?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  plugin?: Maybe<StringQueryOperatorInput>;
  settings?: Maybe<Block__BlockSettingsFilterInput>;
  visibility?: Maybe<Block__BlockVisibilityFilterInput>;
};


export type QueryAllBlockBlockArgs = {
  filter?: Maybe<Block__BlockFilterInput>;
  sort?: Maybe<Block__BlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Search_Page__Search_Page = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Search_Page__Search_PageDependencies>;
  drupal_internal__id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  plugin?: Maybe<Scalars['String']>;
};

export type Search_Page__Search_PageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Search_Page__Search_PageEdge>;
  nodes: Array<Search_Page__Search_Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Search_Page__Search_PageGroupConnection>;
};


export type Search_Page__Search_PageConnectionDistinctArgs = {
  field: Search_Page__Search_PageFieldsEnum;
};


export type Search_Page__Search_PageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Search_Page__Search_PageFieldsEnum;
};

export type Search_Page__Search_PageDependencies = {
  module?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Search_Page__Search_PageDependenciesFilterInput = {
  module?: Maybe<StringQueryOperatorInput>;
};

export type Search_Page__Search_PageEdge = {
  next?: Maybe<Search_Page__Search_Page>;
  node: Search_Page__Search_Page;
  previous?: Maybe<Search_Page__Search_Page>;
};

export type Search_Page__Search_PageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'langcode'
  | 'status'
  | 'dependencies___module'
  | 'drupal_internal__id'
  | 'label'
  | 'path'
  | 'weight'
  | 'plugin';

export type Search_Page__Search_PageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  dependencies?: Maybe<Search_Page__Search_PageDependenciesFilterInput>;
  drupal_internal__id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  plugin?: Maybe<StringQueryOperatorInput>;
};

export type Search_Page__Search_PageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Search_Page__Search_PageEdge>;
  nodes: Array<Search_Page__Search_Page>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Search_Page__Search_PageSortInput = {
  fields?: Maybe<Array<Maybe<Search_Page__Search_PageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___typeRoots'
  | 'pluginCreator___pluginOptions___baseUrl'
  | 'pluginCreator___pluginOptions___apiBase'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___typeRoots'
  | 'pluginOptions___baseUrl'
  | 'pluginOptions___apiBase'
  | 'pluginOptions___fileName'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  typeRoots?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  apiBase?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  typeRoots?: Maybe<StringQueryOperatorInput>;
  baseUrl?: Maybe<StringQueryOperatorInput>;
  apiBase?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__Recipe_Category = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__tid?: Maybe<Scalars['Int']>;
  drupal_internal__revision_id?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_created?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  changed?: Maybe<Scalars['Date']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  revision_translation_affected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Taxonomy_Term__Recipe_CategoryPath>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  content_translation_created?: Maybe<Scalars['Date']>;
  relationships?: Maybe<Taxonomy_Term__Recipe_CategoryRelationships>;
};


export type Taxonomy_Term__Recipe_CategoryRevision_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Taxonomy_Term__Recipe_CategoryChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Taxonomy_Term__Recipe_CategoryContent_Translation_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__Recipe_CategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Taxonomy_Term__Recipe_CategoryEdge>;
  nodes: Array<Taxonomy_Term__Recipe_Category>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Taxonomy_Term__Recipe_CategoryGroupConnection>;
};


export type Taxonomy_Term__Recipe_CategoryConnectionDistinctArgs = {
  field: Taxonomy_Term__Recipe_CategoryFieldsEnum;
};


export type Taxonomy_Term__Recipe_CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Taxonomy_Term__Recipe_CategoryFieldsEnum;
};

export type Taxonomy_Term__Recipe_CategoryEdge = {
  next?: Maybe<Taxonomy_Term__Recipe_Category>;
  node: Taxonomy_Term__Recipe_Category;
  previous?: Maybe<Taxonomy_Term__Recipe_Category>;
};

export type Taxonomy_Term__Recipe_CategoryFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__tid'
  | 'drupal_internal__revision_id'
  | 'langcode'
  | 'revision_created'
  | 'status'
  | 'name'
  | 'weight'
  | 'changed'
  | 'default_langcode'
  | 'revision_translation_affected'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'content_translation_created'
  | 'relationships___node__recipe'
  | 'relationships___node__recipe___id'
  | 'relationships___node__recipe___parent___id'
  | 'relationships___node__recipe___parent___children'
  | 'relationships___node__recipe___children'
  | 'relationships___node__recipe___children___id'
  | 'relationships___node__recipe___children___children'
  | 'relationships___node__recipe___internal___content'
  | 'relationships___node__recipe___internal___contentDigest'
  | 'relationships___node__recipe___internal___description'
  | 'relationships___node__recipe___internal___fieldOwners'
  | 'relationships___node__recipe___internal___ignoreType'
  | 'relationships___node__recipe___internal___mediaType'
  | 'relationships___node__recipe___internal___owner'
  | 'relationships___node__recipe___internal___type'
  | 'relationships___node__recipe___drupal_id'
  | 'relationships___node__recipe___drupal_internal__nid'
  | 'relationships___node__recipe___drupal_internal__vid'
  | 'relationships___node__recipe___langcode'
  | 'relationships___node__recipe___revision_timestamp'
  | 'relationships___node__recipe___status'
  | 'relationships___node__recipe___title'
  | 'relationships___node__recipe___created'
  | 'relationships___node__recipe___changed'
  | 'relationships___node__recipe___promote'
  | 'relationships___node__recipe___sticky'
  | 'relationships___node__recipe___default_langcode'
  | 'relationships___node__recipe___moderation_state'
  | 'relationships___node__recipe___path___alias'
  | 'relationships___node__recipe___path___pid'
  | 'relationships___node__recipe___path___langcode'
  | 'relationships___node__recipe___content_translation_source'
  | 'relationships___node__recipe___content_translation_outdated'
  | 'relationships___node__recipe___field_cooking_time'
  | 'relationships___node__recipe___field_difficulty'
  | 'relationships___node__recipe___field_ingredients'
  | 'relationships___node__recipe___field_number_of_servings'
  | 'relationships___node__recipe___field_preparation_time'
  | 'relationships___node__recipe___field_recipe_instruction___value'
  | 'relationships___node__recipe___field_recipe_instruction___format'
  | 'relationships___node__recipe___field_recipe_instruction___processed'
  | 'relationships___node__recipe___field_summary___value'
  | 'relationships___node__recipe___field_summary___format'
  | 'relationships___node__recipe___field_summary___processed'
  | 'relationships___node__recipe___relationships___field_recipe_category'
  | 'relationships___node__recipe___relationships___field_tags'
  | 'relationships___node__recipe___field_image___alt'
  | 'relationships___node__recipe___field_image___width'
  | 'relationships___node__recipe___field_image___height'
  | 'relationships___node__recipe___fields___slug'
  | 'relationships___content_translation_uid___id'
  | 'relationships___content_translation_uid___parent___id'
  | 'relationships___content_translation_uid___parent___children'
  | 'relationships___content_translation_uid___children'
  | 'relationships___content_translation_uid___children___id'
  | 'relationships___content_translation_uid___children___children'
  | 'relationships___content_translation_uid___internal___content'
  | 'relationships___content_translation_uid___internal___contentDigest'
  | 'relationships___content_translation_uid___internal___description'
  | 'relationships___content_translation_uid___internal___fieldOwners'
  | 'relationships___content_translation_uid___internal___ignoreType'
  | 'relationships___content_translation_uid___internal___mediaType'
  | 'relationships___content_translation_uid___internal___owner'
  | 'relationships___content_translation_uid___internal___type'
  | 'relationships___content_translation_uid___drupal_id'
  | 'relationships___content_translation_uid___name'
  | 'relationships___content_translation_uid___relationships___block_content__banner_block'
  | 'relationships___content_translation_uid___relationships___block_content__disclaimer_block'
  | 'relationships___content_translation_uid___relationships___block_content__footer_promo_block'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__tags'
  | 'relationships___content_translation_uid___relationships___node__article'
  | 'relationships___content_translation_uid___relationships___node__recipe'
  | 'relationships___content_translation_uid___relationships___node__page';

export type Taxonomy_Term__Recipe_CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<Taxonomy_Term__Recipe_CategoryPathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  relationships?: Maybe<Taxonomy_Term__Recipe_CategoryRelationshipsFilterInput>;
};

export type Taxonomy_Term__Recipe_CategoryFilterListInput = {
  elemMatch?: Maybe<Taxonomy_Term__Recipe_CategoryFilterInput>;
};

export type Taxonomy_Term__Recipe_CategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Taxonomy_Term__Recipe_CategoryEdge>;
  nodes: Array<Taxonomy_Term__Recipe_Category>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__Recipe_CategoryPath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__Recipe_CategoryPathFilterInput = {
  alias?: Maybe<StringQueryOperatorInput>;
  pid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
};

export type Taxonomy_Term__Recipe_CategoryRelationships = {
  node__recipe?: Maybe<Array<Maybe<Node__Recipe>>>;
  content_translation_uid?: Maybe<User__User>;
};

export type Taxonomy_Term__Recipe_CategoryRelationshipsFilterInput = {
  node__recipe?: Maybe<Node__RecipeFilterListInput>;
  content_translation_uid?: Maybe<User__UserFilterInput>;
};

export type Taxonomy_Term__Recipe_CategorySortInput = {
  fields?: Maybe<Array<Maybe<Taxonomy_Term__Recipe_CategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Taxonomy_Term__Tags = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__tid?: Maybe<Scalars['Int']>;
  drupal_internal__revision_id?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  revision_created?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  changed?: Maybe<Scalars['Date']>;
  default_langcode?: Maybe<Scalars['Boolean']>;
  revision_translation_affected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Taxonomy_Term__TagsPath>;
  content_translation_source?: Maybe<Scalars['String']>;
  content_translation_outdated?: Maybe<Scalars['Boolean']>;
  content_translation_created?: Maybe<Scalars['Date']>;
  relationships?: Maybe<Taxonomy_Term__TagsRelationships>;
};


export type Taxonomy_Term__TagsRevision_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Taxonomy_Term__TagsChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Taxonomy_Term__TagsContent_Translation_CreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__TagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Taxonomy_Term__TagsEdge>;
  nodes: Array<Taxonomy_Term__Tags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Taxonomy_Term__TagsGroupConnection>;
};


export type Taxonomy_Term__TagsConnectionDistinctArgs = {
  field: Taxonomy_Term__TagsFieldsEnum;
};


export type Taxonomy_Term__TagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Taxonomy_Term__TagsFieldsEnum;
};

export type Taxonomy_Term__TagsEdge = {
  next?: Maybe<Taxonomy_Term__Tags>;
  node: Taxonomy_Term__Tags;
  previous?: Maybe<Taxonomy_Term__Tags>;
};

export type Taxonomy_Term__TagsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__tid'
  | 'drupal_internal__revision_id'
  | 'langcode'
  | 'revision_created'
  | 'status'
  | 'name'
  | 'weight'
  | 'changed'
  | 'default_langcode'
  | 'revision_translation_affected'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'content_translation_source'
  | 'content_translation_outdated'
  | 'content_translation_created'
  | 'relationships___node__article'
  | 'relationships___node__article___id'
  | 'relationships___node__article___parent___id'
  | 'relationships___node__article___parent___children'
  | 'relationships___node__article___children'
  | 'relationships___node__article___children___id'
  | 'relationships___node__article___children___children'
  | 'relationships___node__article___internal___content'
  | 'relationships___node__article___internal___contentDigest'
  | 'relationships___node__article___internal___description'
  | 'relationships___node__article___internal___fieldOwners'
  | 'relationships___node__article___internal___ignoreType'
  | 'relationships___node__article___internal___mediaType'
  | 'relationships___node__article___internal___owner'
  | 'relationships___node__article___internal___type'
  | 'relationships___node__article___drupal_id'
  | 'relationships___node__article___drupal_internal__nid'
  | 'relationships___node__article___drupal_internal__vid'
  | 'relationships___node__article___langcode'
  | 'relationships___node__article___revision_timestamp'
  | 'relationships___node__article___status'
  | 'relationships___node__article___title'
  | 'relationships___node__article___created'
  | 'relationships___node__article___changed'
  | 'relationships___node__article___promote'
  | 'relationships___node__article___sticky'
  | 'relationships___node__article___default_langcode'
  | 'relationships___node__article___moderation_state'
  | 'relationships___node__article___path___alias'
  | 'relationships___node__article___path___pid'
  | 'relationships___node__article___path___langcode'
  | 'relationships___node__article___content_translation_source'
  | 'relationships___node__article___content_translation_outdated'
  | 'relationships___node__article___body___value'
  | 'relationships___node__article___body___format'
  | 'relationships___node__article___body___processed'
  | 'relationships___node__article___relationships___field_tags'
  | 'relationships___node__article___field_image___alt'
  | 'relationships___node__article___field_image___width'
  | 'relationships___node__article___field_image___height'
  | 'relationships___content_translation_uid___id'
  | 'relationships___content_translation_uid___parent___id'
  | 'relationships___content_translation_uid___parent___children'
  | 'relationships___content_translation_uid___children'
  | 'relationships___content_translation_uid___children___id'
  | 'relationships___content_translation_uid___children___children'
  | 'relationships___content_translation_uid___internal___content'
  | 'relationships___content_translation_uid___internal___contentDigest'
  | 'relationships___content_translation_uid___internal___description'
  | 'relationships___content_translation_uid___internal___fieldOwners'
  | 'relationships___content_translation_uid___internal___ignoreType'
  | 'relationships___content_translation_uid___internal___mediaType'
  | 'relationships___content_translation_uid___internal___owner'
  | 'relationships___content_translation_uid___internal___type'
  | 'relationships___content_translation_uid___drupal_id'
  | 'relationships___content_translation_uid___name'
  | 'relationships___content_translation_uid___relationships___block_content__banner_block'
  | 'relationships___content_translation_uid___relationships___block_content__disclaimer_block'
  | 'relationships___content_translation_uid___relationships___block_content__footer_promo_block'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__recipe_category'
  | 'relationships___content_translation_uid___relationships___taxonomy_term__tags'
  | 'relationships___content_translation_uid___relationships___node__article'
  | 'relationships___content_translation_uid___relationships___node__recipe'
  | 'relationships___content_translation_uid___relationships___node__page'
  | 'relationships___node__recipe'
  | 'relationships___node__recipe___id'
  | 'relationships___node__recipe___parent___id'
  | 'relationships___node__recipe___parent___children'
  | 'relationships___node__recipe___children'
  | 'relationships___node__recipe___children___id'
  | 'relationships___node__recipe___children___children'
  | 'relationships___node__recipe___internal___content'
  | 'relationships___node__recipe___internal___contentDigest'
  | 'relationships___node__recipe___internal___description'
  | 'relationships___node__recipe___internal___fieldOwners'
  | 'relationships___node__recipe___internal___ignoreType'
  | 'relationships___node__recipe___internal___mediaType'
  | 'relationships___node__recipe___internal___owner'
  | 'relationships___node__recipe___internal___type'
  | 'relationships___node__recipe___drupal_id'
  | 'relationships___node__recipe___drupal_internal__nid'
  | 'relationships___node__recipe___drupal_internal__vid'
  | 'relationships___node__recipe___langcode'
  | 'relationships___node__recipe___revision_timestamp'
  | 'relationships___node__recipe___status'
  | 'relationships___node__recipe___title'
  | 'relationships___node__recipe___created'
  | 'relationships___node__recipe___changed'
  | 'relationships___node__recipe___promote'
  | 'relationships___node__recipe___sticky'
  | 'relationships___node__recipe___default_langcode'
  | 'relationships___node__recipe___moderation_state'
  | 'relationships___node__recipe___path___alias'
  | 'relationships___node__recipe___path___pid'
  | 'relationships___node__recipe___path___langcode'
  | 'relationships___node__recipe___content_translation_source'
  | 'relationships___node__recipe___content_translation_outdated'
  | 'relationships___node__recipe___field_cooking_time'
  | 'relationships___node__recipe___field_difficulty'
  | 'relationships___node__recipe___field_ingredients'
  | 'relationships___node__recipe___field_number_of_servings'
  | 'relationships___node__recipe___field_preparation_time'
  | 'relationships___node__recipe___field_recipe_instruction___value'
  | 'relationships___node__recipe___field_recipe_instruction___format'
  | 'relationships___node__recipe___field_recipe_instruction___processed'
  | 'relationships___node__recipe___field_summary___value'
  | 'relationships___node__recipe___field_summary___format'
  | 'relationships___node__recipe___field_summary___processed'
  | 'relationships___node__recipe___relationships___field_recipe_category'
  | 'relationships___node__recipe___relationships___field_tags'
  | 'relationships___node__recipe___field_image___alt'
  | 'relationships___node__recipe___field_image___width'
  | 'relationships___node__recipe___field_image___height'
  | 'relationships___node__recipe___fields___slug';

export type Taxonomy_Term__TagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IntQueryOperatorInput>;
  drupal_internal__revision_id?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
  revision_created?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  changed?: Maybe<DateQueryOperatorInput>;
  default_langcode?: Maybe<BooleanQueryOperatorInput>;
  revision_translation_affected?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<Taxonomy_Term__TagsPathFilterInput>;
  content_translation_source?: Maybe<StringQueryOperatorInput>;
  content_translation_outdated?: Maybe<BooleanQueryOperatorInput>;
  content_translation_created?: Maybe<DateQueryOperatorInput>;
  relationships?: Maybe<Taxonomy_Term__TagsRelationshipsFilterInput>;
};

export type Taxonomy_Term__TagsFilterListInput = {
  elemMatch?: Maybe<Taxonomy_Term__TagsFilterInput>;
};

export type Taxonomy_Term__TagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Taxonomy_Term__TagsEdge>;
  nodes: Array<Taxonomy_Term__Tags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__TagsPath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
};

export type Taxonomy_Term__TagsPathFilterInput = {
  alias?: Maybe<StringQueryOperatorInput>;
  pid?: Maybe<IntQueryOperatorInput>;
  langcode?: Maybe<StringQueryOperatorInput>;
};

export type Taxonomy_Term__TagsRelationships = {
  node__article?: Maybe<Array<Maybe<Node__Article>>>;
  content_translation_uid?: Maybe<User__User>;
  node__recipe?: Maybe<Array<Maybe<Node__Recipe>>>;
};

export type Taxonomy_Term__TagsRelationshipsFilterInput = {
  node__article?: Maybe<Node__ArticleFilterListInput>;
  content_translation_uid?: Maybe<User__UserFilterInput>;
  node__recipe?: Maybe<Node__RecipeFilterListInput>;
};

export type Taxonomy_Term__TagsSortInput = {
  fields?: Maybe<Array<Maybe<Taxonomy_Term__TagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type User__User = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  drupal_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relationships?: Maybe<User__UserRelationships>;
};

export type User__UserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<User__UserEdge>;
  nodes: Array<User__User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<User__UserGroupConnection>;
};


export type User__UserConnectionDistinctArgs = {
  field: User__UserFieldsEnum;
};


export type User__UserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: User__UserFieldsEnum;
};

export type User__UserEdge = {
  next?: Maybe<User__User>;
  node: User__User;
  previous?: Maybe<User__User>;
};

export type User__UserFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'name'
  | 'relationships___block_content__banner_block'
  | 'relationships___block_content__banner_block___id'
  | 'relationships___block_content__banner_block___parent___id'
  | 'relationships___block_content__banner_block___parent___children'
  | 'relationships___block_content__banner_block___children'
  | 'relationships___block_content__banner_block___children___id'
  | 'relationships___block_content__banner_block___children___children'
  | 'relationships___block_content__banner_block___internal___content'
  | 'relationships___block_content__banner_block___internal___contentDigest'
  | 'relationships___block_content__banner_block___internal___description'
  | 'relationships___block_content__banner_block___internal___fieldOwners'
  | 'relationships___block_content__banner_block___internal___ignoreType'
  | 'relationships___block_content__banner_block___internal___mediaType'
  | 'relationships___block_content__banner_block___internal___owner'
  | 'relationships___block_content__banner_block___internal___type'
  | 'relationships___block_content__banner_block___drupal_id'
  | 'relationships___block_content__banner_block___drupal_internal__id'
  | 'relationships___block_content__banner_block___drupal_internal__revision_id'
  | 'relationships___block_content__banner_block___langcode'
  | 'relationships___block_content__banner_block___revision_created'
  | 'relationships___block_content__banner_block___status'
  | 'relationships___block_content__banner_block___info'
  | 'relationships___block_content__banner_block___changed'
  | 'relationships___block_content__banner_block___reusable'
  | 'relationships___block_content__banner_block___default_langcode'
  | 'relationships___block_content__banner_block___revision_translation_affected'
  | 'relationships___block_content__banner_block___content_translation_source'
  | 'relationships___block_content__banner_block___content_translation_outdated'
  | 'relationships___block_content__banner_block___content_translation_created'
  | 'relationships___block_content__banner_block___field_content_link___uri'
  | 'relationships___block_content__banner_block___field_content_link___title'
  | 'relationships___block_content__banner_block___field_summary'
  | 'relationships___block_content__banner_block___field_title'
  | 'relationships___block_content__banner_block___field_banner_image___alt'
  | 'relationships___block_content__banner_block___field_banner_image___width'
  | 'relationships___block_content__banner_block___field_banner_image___height'
  | 'relationships___block_content__disclaimer_block'
  | 'relationships___block_content__disclaimer_block___id'
  | 'relationships___block_content__disclaimer_block___parent___id'
  | 'relationships___block_content__disclaimer_block___parent___children'
  | 'relationships___block_content__disclaimer_block___children'
  | 'relationships___block_content__disclaimer_block___children___id'
  | 'relationships___block_content__disclaimer_block___children___children'
  | 'relationships___block_content__disclaimer_block___internal___content'
  | 'relationships___block_content__disclaimer_block___internal___contentDigest'
  | 'relationships___block_content__disclaimer_block___internal___description'
  | 'relationships___block_content__disclaimer_block___internal___fieldOwners'
  | 'relationships___block_content__disclaimer_block___internal___ignoreType'
  | 'relationships___block_content__disclaimer_block___internal___mediaType'
  | 'relationships___block_content__disclaimer_block___internal___owner'
  | 'relationships___block_content__disclaimer_block___internal___type'
  | 'relationships___block_content__disclaimer_block___drupal_id'
  | 'relationships___block_content__disclaimer_block___drupal_internal__id'
  | 'relationships___block_content__disclaimer_block___drupal_internal__revision_id'
  | 'relationships___block_content__disclaimer_block___langcode'
  | 'relationships___block_content__disclaimer_block___revision_created'
  | 'relationships___block_content__disclaimer_block___status'
  | 'relationships___block_content__disclaimer_block___info'
  | 'relationships___block_content__disclaimer_block___changed'
  | 'relationships___block_content__disclaimer_block___reusable'
  | 'relationships___block_content__disclaimer_block___default_langcode'
  | 'relationships___block_content__disclaimer_block___revision_translation_affected'
  | 'relationships___block_content__disclaimer_block___content_translation_source'
  | 'relationships___block_content__disclaimer_block___content_translation_outdated'
  | 'relationships___block_content__disclaimer_block___content_translation_created'
  | 'relationships___block_content__disclaimer_block___field_copyright___value'
  | 'relationships___block_content__disclaimer_block___field_copyright___format'
  | 'relationships___block_content__disclaimer_block___field_copyright___processed'
  | 'relationships___block_content__disclaimer_block___field_disclaimer___value'
  | 'relationships___block_content__disclaimer_block___field_disclaimer___format'
  | 'relationships___block_content__disclaimer_block___field_disclaimer___processed'
  | 'relationships___block_content__footer_promo_block'
  | 'relationships___block_content__footer_promo_block___id'
  | 'relationships___block_content__footer_promo_block___parent___id'
  | 'relationships___block_content__footer_promo_block___parent___children'
  | 'relationships___block_content__footer_promo_block___children'
  | 'relationships___block_content__footer_promo_block___children___id'
  | 'relationships___block_content__footer_promo_block___children___children'
  | 'relationships___block_content__footer_promo_block___internal___content'
  | 'relationships___block_content__footer_promo_block___internal___contentDigest'
  | 'relationships___block_content__footer_promo_block___internal___description'
  | 'relationships___block_content__footer_promo_block___internal___fieldOwners'
  | 'relationships___block_content__footer_promo_block___internal___ignoreType'
  | 'relationships___block_content__footer_promo_block___internal___mediaType'
  | 'relationships___block_content__footer_promo_block___internal___owner'
  | 'relationships___block_content__footer_promo_block___internal___type'
  | 'relationships___block_content__footer_promo_block___drupal_id'
  | 'relationships___block_content__footer_promo_block___drupal_internal__id'
  | 'relationships___block_content__footer_promo_block___drupal_internal__revision_id'
  | 'relationships___block_content__footer_promo_block___langcode'
  | 'relationships___block_content__footer_promo_block___revision_created'
  | 'relationships___block_content__footer_promo_block___status'
  | 'relationships___block_content__footer_promo_block___info'
  | 'relationships___block_content__footer_promo_block___changed'
  | 'relationships___block_content__footer_promo_block___reusable'
  | 'relationships___block_content__footer_promo_block___default_langcode'
  | 'relationships___block_content__footer_promo_block___revision_translation_affected'
  | 'relationships___block_content__footer_promo_block___content_translation_source'
  | 'relationships___block_content__footer_promo_block___content_translation_outdated'
  | 'relationships___block_content__footer_promo_block___content_translation_created'
  | 'relationships___block_content__footer_promo_block___field_content_link___uri'
  | 'relationships___block_content__footer_promo_block___field_content_link___title'
  | 'relationships___block_content__footer_promo_block___field_summary'
  | 'relationships___block_content__footer_promo_block___field_title'
  | 'relationships___block_content__footer_promo_block___field_promo_image___alt'
  | 'relationships___block_content__footer_promo_block___field_promo_image___width'
  | 'relationships___block_content__footer_promo_block___field_promo_image___height'
  | 'relationships___taxonomy_term__recipe_category'
  | 'relationships___taxonomy_term__recipe_category___id'
  | 'relationships___taxonomy_term__recipe_category___parent___id'
  | 'relationships___taxonomy_term__recipe_category___parent___children'
  | 'relationships___taxonomy_term__recipe_category___children'
  | 'relationships___taxonomy_term__recipe_category___children___id'
  | 'relationships___taxonomy_term__recipe_category___children___children'
  | 'relationships___taxonomy_term__recipe_category___internal___content'
  | 'relationships___taxonomy_term__recipe_category___internal___contentDigest'
  | 'relationships___taxonomy_term__recipe_category___internal___description'
  | 'relationships___taxonomy_term__recipe_category___internal___fieldOwners'
  | 'relationships___taxonomy_term__recipe_category___internal___ignoreType'
  | 'relationships___taxonomy_term__recipe_category___internal___mediaType'
  | 'relationships___taxonomy_term__recipe_category___internal___owner'
  | 'relationships___taxonomy_term__recipe_category___internal___type'
  | 'relationships___taxonomy_term__recipe_category___drupal_id'
  | 'relationships___taxonomy_term__recipe_category___drupal_internal__tid'
  | 'relationships___taxonomy_term__recipe_category___drupal_internal__revision_id'
  | 'relationships___taxonomy_term__recipe_category___langcode'
  | 'relationships___taxonomy_term__recipe_category___revision_created'
  | 'relationships___taxonomy_term__recipe_category___status'
  | 'relationships___taxonomy_term__recipe_category___name'
  | 'relationships___taxonomy_term__recipe_category___weight'
  | 'relationships___taxonomy_term__recipe_category___changed'
  | 'relationships___taxonomy_term__recipe_category___default_langcode'
  | 'relationships___taxonomy_term__recipe_category___revision_translation_affected'
  | 'relationships___taxonomy_term__recipe_category___path___alias'
  | 'relationships___taxonomy_term__recipe_category___path___pid'
  | 'relationships___taxonomy_term__recipe_category___path___langcode'
  | 'relationships___taxonomy_term__recipe_category___content_translation_source'
  | 'relationships___taxonomy_term__recipe_category___content_translation_outdated'
  | 'relationships___taxonomy_term__recipe_category___content_translation_created'
  | 'relationships___taxonomy_term__recipe_category___relationships___node__recipe'
  | 'relationships___taxonomy_term__tags'
  | 'relationships___taxonomy_term__tags___id'
  | 'relationships___taxonomy_term__tags___parent___id'
  | 'relationships___taxonomy_term__tags___parent___children'
  | 'relationships___taxonomy_term__tags___children'
  | 'relationships___taxonomy_term__tags___children___id'
  | 'relationships___taxonomy_term__tags___children___children'
  | 'relationships___taxonomy_term__tags___internal___content'
  | 'relationships___taxonomy_term__tags___internal___contentDigest'
  | 'relationships___taxonomy_term__tags___internal___description'
  | 'relationships___taxonomy_term__tags___internal___fieldOwners'
  | 'relationships___taxonomy_term__tags___internal___ignoreType'
  | 'relationships___taxonomy_term__tags___internal___mediaType'
  | 'relationships___taxonomy_term__tags___internal___owner'
  | 'relationships___taxonomy_term__tags___internal___type'
  | 'relationships___taxonomy_term__tags___drupal_id'
  | 'relationships___taxonomy_term__tags___drupal_internal__tid'
  | 'relationships___taxonomy_term__tags___drupal_internal__revision_id'
  | 'relationships___taxonomy_term__tags___langcode'
  | 'relationships___taxonomy_term__tags___revision_created'
  | 'relationships___taxonomy_term__tags___status'
  | 'relationships___taxonomy_term__tags___name'
  | 'relationships___taxonomy_term__tags___weight'
  | 'relationships___taxonomy_term__tags___changed'
  | 'relationships___taxonomy_term__tags___default_langcode'
  | 'relationships___taxonomy_term__tags___revision_translation_affected'
  | 'relationships___taxonomy_term__tags___path___alias'
  | 'relationships___taxonomy_term__tags___path___pid'
  | 'relationships___taxonomy_term__tags___path___langcode'
  | 'relationships___taxonomy_term__tags___content_translation_source'
  | 'relationships___taxonomy_term__tags___content_translation_outdated'
  | 'relationships___taxonomy_term__tags___content_translation_created'
  | 'relationships___taxonomy_term__tags___relationships___node__article'
  | 'relationships___taxonomy_term__tags___relationships___node__recipe'
  | 'relationships___node__article'
  | 'relationships___node__article___id'
  | 'relationships___node__article___parent___id'
  | 'relationships___node__article___parent___children'
  | 'relationships___node__article___children'
  | 'relationships___node__article___children___id'
  | 'relationships___node__article___children___children'
  | 'relationships___node__article___internal___content'
  | 'relationships___node__article___internal___contentDigest'
  | 'relationships___node__article___internal___description'
  | 'relationships___node__article___internal___fieldOwners'
  | 'relationships___node__article___internal___ignoreType'
  | 'relationships___node__article___internal___mediaType'
  | 'relationships___node__article___internal___owner'
  | 'relationships___node__article___internal___type'
  | 'relationships___node__article___drupal_id'
  | 'relationships___node__article___drupal_internal__nid'
  | 'relationships___node__article___drupal_internal__vid'
  | 'relationships___node__article___langcode'
  | 'relationships___node__article___revision_timestamp'
  | 'relationships___node__article___status'
  | 'relationships___node__article___title'
  | 'relationships___node__article___created'
  | 'relationships___node__article___changed'
  | 'relationships___node__article___promote'
  | 'relationships___node__article___sticky'
  | 'relationships___node__article___default_langcode'
  | 'relationships___node__article___moderation_state'
  | 'relationships___node__article___path___alias'
  | 'relationships___node__article___path___pid'
  | 'relationships___node__article___path___langcode'
  | 'relationships___node__article___content_translation_source'
  | 'relationships___node__article___content_translation_outdated'
  | 'relationships___node__article___body___value'
  | 'relationships___node__article___body___format'
  | 'relationships___node__article___body___processed'
  | 'relationships___node__article___relationships___field_tags'
  | 'relationships___node__article___field_image___alt'
  | 'relationships___node__article___field_image___width'
  | 'relationships___node__article___field_image___height'
  | 'relationships___node__recipe'
  | 'relationships___node__recipe___id'
  | 'relationships___node__recipe___parent___id'
  | 'relationships___node__recipe___parent___children'
  | 'relationships___node__recipe___children'
  | 'relationships___node__recipe___children___id'
  | 'relationships___node__recipe___children___children'
  | 'relationships___node__recipe___internal___content'
  | 'relationships___node__recipe___internal___contentDigest'
  | 'relationships___node__recipe___internal___description'
  | 'relationships___node__recipe___internal___fieldOwners'
  | 'relationships___node__recipe___internal___ignoreType'
  | 'relationships___node__recipe___internal___mediaType'
  | 'relationships___node__recipe___internal___owner'
  | 'relationships___node__recipe___internal___type'
  | 'relationships___node__recipe___drupal_id'
  | 'relationships___node__recipe___drupal_internal__nid'
  | 'relationships___node__recipe___drupal_internal__vid'
  | 'relationships___node__recipe___langcode'
  | 'relationships___node__recipe___revision_timestamp'
  | 'relationships___node__recipe___status'
  | 'relationships___node__recipe___title'
  | 'relationships___node__recipe___created'
  | 'relationships___node__recipe___changed'
  | 'relationships___node__recipe___promote'
  | 'relationships___node__recipe___sticky'
  | 'relationships___node__recipe___default_langcode'
  | 'relationships___node__recipe___moderation_state'
  | 'relationships___node__recipe___path___alias'
  | 'relationships___node__recipe___path___pid'
  | 'relationships___node__recipe___path___langcode'
  | 'relationships___node__recipe___content_translation_source'
  | 'relationships___node__recipe___content_translation_outdated'
  | 'relationships___node__recipe___field_cooking_time'
  | 'relationships___node__recipe___field_difficulty'
  | 'relationships___node__recipe___field_ingredients'
  | 'relationships___node__recipe___field_number_of_servings'
  | 'relationships___node__recipe___field_preparation_time'
  | 'relationships___node__recipe___field_recipe_instruction___value'
  | 'relationships___node__recipe___field_recipe_instruction___format'
  | 'relationships___node__recipe___field_recipe_instruction___processed'
  | 'relationships___node__recipe___field_summary___value'
  | 'relationships___node__recipe___field_summary___format'
  | 'relationships___node__recipe___field_summary___processed'
  | 'relationships___node__recipe___relationships___field_recipe_category'
  | 'relationships___node__recipe___relationships___field_tags'
  | 'relationships___node__recipe___field_image___alt'
  | 'relationships___node__recipe___field_image___width'
  | 'relationships___node__recipe___field_image___height'
  | 'relationships___node__recipe___fields___slug'
  | 'relationships___node__page'
  | 'relationships___node__page___id'
  | 'relationships___node__page___parent___id'
  | 'relationships___node__page___parent___children'
  | 'relationships___node__page___children'
  | 'relationships___node__page___children___id'
  | 'relationships___node__page___children___children'
  | 'relationships___node__page___internal___content'
  | 'relationships___node__page___internal___contentDigest'
  | 'relationships___node__page___internal___description'
  | 'relationships___node__page___internal___fieldOwners'
  | 'relationships___node__page___internal___ignoreType'
  | 'relationships___node__page___internal___mediaType'
  | 'relationships___node__page___internal___owner'
  | 'relationships___node__page___internal___type'
  | 'relationships___node__page___drupal_id'
  | 'relationships___node__page___drupal_internal__nid'
  | 'relationships___node__page___drupal_internal__vid'
  | 'relationships___node__page___langcode'
  | 'relationships___node__page___revision_timestamp'
  | 'relationships___node__page___status'
  | 'relationships___node__page___title'
  | 'relationships___node__page___created'
  | 'relationships___node__page___changed'
  | 'relationships___node__page___promote'
  | 'relationships___node__page___sticky'
  | 'relationships___node__page___default_langcode'
  | 'relationships___node__page___moderation_state'
  | 'relationships___node__page___path___alias'
  | 'relationships___node__page___path___pid'
  | 'relationships___node__page___path___langcode'
  | 'relationships___node__page___content_translation_source'
  | 'relationships___node__page___content_translation_outdated'
  | 'relationships___node__page___body___value'
  | 'relationships___node__page___body___format'
  | 'relationships___node__page___body___processed';

export type User__UserFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  drupal_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relationships?: Maybe<User__UserRelationshipsFilterInput>;
};

export type User__UserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<User__UserEdge>;
  nodes: Array<User__User>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type User__UserRelationships = {
  block_content__banner_block?: Maybe<Array<Maybe<Block_Content__Banner_Block>>>;
  block_content__disclaimer_block?: Maybe<Array<Maybe<Block_Content__Disclaimer_Block>>>;
  block_content__footer_promo_block?: Maybe<Array<Maybe<Block_Content__Footer_Promo_Block>>>;
  taxonomy_term__recipe_category?: Maybe<Array<Maybe<Taxonomy_Term__Recipe_Category>>>;
  taxonomy_term__tags?: Maybe<Array<Maybe<Taxonomy_Term__Tags>>>;
  node__article?: Maybe<Array<Maybe<Node__Article>>>;
  node__recipe?: Maybe<Array<Maybe<Node__Recipe>>>;
  node__page?: Maybe<Array<Maybe<Node__Page>>>;
};

export type User__UserRelationshipsFilterInput = {
  block_content__banner_block?: Maybe<Block_Content__Banner_BlockFilterListInput>;
  block_content__disclaimer_block?: Maybe<Block_Content__Disclaimer_BlockFilterListInput>;
  block_content__footer_promo_block?: Maybe<Block_Content__Footer_Promo_BlockFilterListInput>;
  taxonomy_term__recipe_category?: Maybe<Taxonomy_Term__Recipe_CategoryFilterListInput>;
  taxonomy_term__tags?: Maybe<Taxonomy_Term__TagsFilterListInput>;
  node__article?: Maybe<Node__ArticleFilterListInput>;
  node__recipe?: Maybe<Node__RecipeFilterListInput>;
  node__page?: Maybe<Node__PageFilterListInput>;
};

export type User__UserSortInput = {
  fields?: Maybe<Array<Maybe<User__UserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allNodeRecipe: { edges: Array<{ node: (
        Pick<Node__Recipe, 'title'>
        & { fields?: Maybe<Pick<Node__RecipeFields, 'slug'>>, relationships?: Maybe<{ field_image?: Maybe<{ localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }> }> }
      ) }> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
