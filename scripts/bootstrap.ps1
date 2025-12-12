try {
    $root = git -C $PSScriptRoot rev-parse --show-toplevel 2>$null
    if ($LASTEXITCODE -eq 0 -and $root) { Set-Location $root }
}
catch {}
