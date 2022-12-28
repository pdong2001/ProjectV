export interface BlobDto {
  id: string;
  name: string | null;
  contentType: string;
  content: string;
  folder: string | null;
  fileName: string;
}
