interface ImportMeta {
  readonly hot?: {
    readonly data: any;
    accept(cb?: (mod: any) => void): void;
    accept(dependencies: string[], cb?: (mods: any[]) => void): void;
    dispose(cb: () => void): void;
    decline(): void;
    invalidate(): void;
    // Add other HMR-related properties as needed
  };
}
