#!/bin/bash

ENVIRONMENT=$1

if [ -z "$ENVIRONMENT" ]; then
  ENVIRONMENT="prod"
fi

echo "🧹 Deleting old Allure results..."
rm -rf ./allure-results

echo "✅ Running tests for '$ENVIRONMENT' environment..."
ENV=$ENVIRONMENT npx playwright test

echo "📊 Generating new Allure report..."
npx allure generate ./allure-results --clean -o ./allure-report-$ENVIRONMENT

echo "🌐 Opening Allure report in browser..."
npx allure open ./allure-report-$ENVIRONMENT

#command for run: ./allure-run.sh [ENV]