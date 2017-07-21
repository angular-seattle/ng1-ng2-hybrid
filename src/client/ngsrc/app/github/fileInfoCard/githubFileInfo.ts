export class GithubFileInfo {
  public sha: string;
  public filename: string;
  public status: string;
  public additions: number;
  public deletions: number;
  public changes: number;
  public blob_url: string;
  public raw_url: string;
  public contents: string;
  public patch: string;

  constructor(obj: any) {
    this.sha = obj.sha;
    this.filename = obj.filename;
    this.status = obj.status;
    this.additions = obj.additions;
    this.deletions = obj.deletions;
    this.changes = obj.changes;
    this.blob_url = obj.blob_url;
    this.raw_url = obj.raw_url;
    this.contents = obj.contents;

    if (obj.patch) {
      this.patch = this.formatPatch(obj.patch);
    }
  }

  public toString(): string {
    return this.filename;
  }

  private formatPatch(patch: string) {
    return patch.replace(/\/n\+/g, '\n');
  }
}
