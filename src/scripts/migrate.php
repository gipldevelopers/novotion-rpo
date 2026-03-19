<?php
$host = 'srv999.hstgr.io';
$user = 'u151187270_noltvendb';
$pass = '!Kk6q|v0JXc';
$db   = 'u151187270_noltvendb_admi';

echo "📡 Connecting to $host...\n";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Connected!\n";

    echo "🗑️ Dropping services table...\n";
    $pdo->exec("DROP TABLE IF EXISTS services");

    echo "🗑️ Dropping temporary tables...\n";
    $pdo->exec("DROP TABLE IF EXISTS case_study_requests");

    echo "🏗️ Creating study_leads table...\n";
    $sql = "CREATE TABLE IF NOT EXISTS study_leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(50),
        case_study_slug VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);

    echo "📊 Current Tables:\n";
    $stmt = $pdo->query("SHOW TABLES");
    while ($row = $stmt->fetch(PDO::FETCH_NUM)) {
        echo "- " . $row[0] . "\n";
    }

    echo "✅ MIGRATION COMPLETE!\n";

} catch (PDOException $e) {
    echo "❌ ERROR: " . $e->getMessage() . "\n";
}
