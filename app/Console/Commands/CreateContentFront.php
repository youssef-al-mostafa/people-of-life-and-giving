<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class CreateContentFront extends Command
{
    protected $signature = 'content:create-front {page : The page name}
                            {--path=website : The base path for the page}';
    protected $description = 'Create frontend React component for a content page';

    protected $files;

    public function __construct(Filesystem $files)
    {
        parent::__construct();
        $this->files = $files;
    }

    public function handle()
    {
        $page = $this->argument('page');
        $basePath = $this->option('path');
        $pagePath = resource_path("js/pages/{$basePath}/{$page}");

        if (!$this->files->isDirectory($pagePath)) {
            $this->files->makeDirectory($pagePath, 0755, true);
            $this->info("Created directory: {$pagePath}");
        } else {
            $this->warn("Directory already exists: {$pagePath}");
        }

        $this->createPageComponent($page, $pagePath, $basePath);
        $this->info("Frontend files for '{$page}' have been created successfully!");

        return Command::SUCCESS;
    }

    protected function createPageComponent($page, $pagePath, $basePath)
    {
        $pageFilePath = "{$pagePath}/page.tsx";

        if ($this->files->exists($pageFilePath)) {
            if (!$this->confirm("The page component already exists. Do you want to overwrite it?")) {
                $this->info("Operation cancelled.");
                return;
            }
        }
        $componentContent = $this->generatePageComponentContent($page, $basePath);

        $this->files->put($pageFilePath, $componentContent);
        $this->info("Created page component: {$pageFilePath}");
    }

    protected function generatePageComponentContent($page, $basePath)
    {
        $pascalCasePage = Str::studly($page);
        $titleCasePage = Str::title($page);

        $relativePath = '';
        $dirCount = substr_count($basePath, '/') + 1;
        for ($i = 0; $i < $dirCount; $i++) {
            $relativePath .= '../';
        }

        return <<<EOT
import WebsiteLayout from '@/layouts/WebsiteLayout';

export default function {$pascalCasePage}() {
    return (
        <WebsiteLayout title="{$titleCasePage}" description="Welcome to our website">
            page content goes here...
        </WebsiteLayout>
    );
}
EOT;
    }
}
