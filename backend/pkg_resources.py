class DistributionNotFound(Exception):
    """Minimal shim for pkg_resources.DistributionNotFound used in tests."""
    pass


def get_distribution(name):
    """Return a minimal stub or raise DistributionNotFound.

    This shim prevents import-time failures for packages that try to
    query installed distributions during test collection. It intentionally
    raises DistributionNotFound so callers treat the package as not
    available rather than crashing the test run.
    """
    raise DistributionNotFound(f"Distribution {name} not found (shim)")
